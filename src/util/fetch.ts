import axios from "axios";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "../api/leaflet";
import { airQuality, localTime, city } from "./selectors";
import { showToast } from "./toast";
import {
  handleAirQualityColor,
  removeMessageError,
  setMultipleHtmlElements,
} from "./utility";

export const fetchAutoGeolocation = async (url: string): Promise<any> => {
  try {
    const response = axios.get(url);
    response.then((data) => {
      handleAirQualityColor(data.data.data.aqi ?? 0);
      setMultipleHtmlElements(airQuality, data.data.data.aqi ?? "Not Found");
      setMultipleHtmlElements(localTime, data.data.data.time.s ?? "Not Found");
      setMultipleHtmlElements(city, data.data.data.city.name ?? "Not Found");
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchOnInput = async (url: string): Promise<any> => {
  try {
    const response = axios.get(url);
    response.then((data) => {
      if (data.data.status != "ok") {
        showToast();
      } else {
        handleAirQualityColor(data.data.data.aqi ?? 0);
        setMultipleHtmlElements(airQuality, data.data.data.aqi ?? "Not Found");
        setMultipleHtmlElements(
          localTime,
          data.data.data.time.s ?? "Not Found"
        );
        setMultipleHtmlElements(city, data.data.data.city.name ?? "Not Found");
        const lat = data.data.data.city.geo[0];
        const long = data.data.data.city.geo[1];
        const latlong: LatLngExpression = [lat, long];
        changeLocation(latlong);
        removeMessageError();
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
