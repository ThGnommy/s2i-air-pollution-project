import axios from "axios";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "../api/leaflet";
import { airQuality, localTime, city } from "./selectors";
import { showToast, showToast2 } from "./toast";

export const fetchAutoGeolocation = async (url: string): Promise<any> => {
  try {
    const response = axios.get(url);
    response.then((data) => {
      console.log(data);
      airQuality.innerHTML = data.data.data.aqi ?? "Not Found";
      localTime.innerHTML = data.data.data.time.s ?? "Not Found";
      city.innerHTML = data.data.data.city.name ?? "Not Found";
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchOnInput = async (url: string): Promise<any> => {
  try {
    const response = axios.get(url);
    response.then((data) => {
      console.log(data);
      if (data.data.status != "ok") {
        showToast2();
      } else {
        airQuality.innerHTML = data.data.data.aqi ?? "Not Found";
        localTime.innerHTML = data.data.data.time.s ?? "Not Found";
        city.innerHTML = data.data.data.city.name ?? "Not Found";
        const lat = data.data.data.city.geo[0];
        const long = data.data.data.city.geo[1];
        const latlong: LatLngExpression = [lat, long];
        changeLocation(latlong);
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
