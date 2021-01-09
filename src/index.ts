// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA

import "../src/reset.css";
import "../src/style.css";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "./api/leaflet";
import { fetchAutoGeolocation } from "./util/fetch";
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
    fetchAutoGeolocation(
      `https://api.waqi.info/feed/${inputValue}/?token=c8f3fb8806f350497f7a43ce886f000306bced4a`
    );
  }
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
        `https://api.waqi.info/feed/geo:${lat};${lng}/?token=c8f3fb8806f350497f7a43ce886f000306bced4a`
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
      break;
    case error.TIMEOUT:
      errorMessage.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage.innerHTML = "An unknown error occurred.";
      break;
  }
};

getGeolocation();
