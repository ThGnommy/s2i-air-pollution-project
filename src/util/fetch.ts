import axios from "axios";
import { airQuality, localTime, city } from "./selectors";

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
