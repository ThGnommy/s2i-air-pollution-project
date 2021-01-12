// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA

import "../src/reset.css";
import "../src/style.css";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "./api/leaflet";
import { fetchAutoGeolocation, fetchOnInput } from "./util/fetch";
import {
  errorMessage,
  detailsContainer,
  input,
  button,
} from "./util/selectors";

let inputValue: string = "";

input.addEventListener("input", (e: any) => {
  inputValue = e.target.value;
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputValue.trim().length > 0) {
    fetchOnInput(
      `https://api.waqi.info/feed/${inputValue}/?token=${process.env.API_KEY}`
    );
  } else return;
});

const getGeolocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latlong: LatLngExpression = [
        position.coords.latitude,
        position.coords.longitude,
      ];
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      changeLocation(latlong);
      fetchAutoGeolocation(
        `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.API_KEY}`
      );
    }, handleError);
  }
};

const handleError = (error: any) => {
  detailsContainer.classList.add("hide-details");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage.innerHTML = "Unable to access your location.";
      errorMessage.style.display = "block";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage.innerHTML = "Location information is unavailable.";
      errorMessage.style.display = "block";
      break;
    case error.TIMEOUT:
      errorMessage.innerHTML = "The request to get user location timed out.";
      errorMessage.style.display = "block";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage.innerHTML = "An unknown error occurred.";
      errorMessage.style.display = "block";
      break;
  }
};

getGeolocation();
