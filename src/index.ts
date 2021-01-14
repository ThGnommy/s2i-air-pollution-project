// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA

import "../src/reset.css";
import "../src/style.css";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "./api/leaflet";
import { fetchAutoGeolocation, fetchOnInput } from "./util/fetch";
import { input, button, detailsContainer } from "./util/selectors";
import { showMessageError } from "./util/utility";

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
  showMessageError();
  const errorMessage = document.getElementById(
    "error-message"
  )! as HTMLSpanElement;
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

const showContainerDetails = async () => {
  // check for tablet and mobile
  const isNotDesktop = window.matchMedia("(max-width: 1024px)").matches;
  const permission = await navigator.permissions
    .query({ name: "geolocation" })
    .then((permission) => {
      return permission.state;
    });

  if (isNotDesktop && permission !== "prompt") {
    detailsContainer.classList.add("show-details-container");
  } else {
    // If the permission is already set on start, show the description container
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state == "granted") {
          detailsContainer.classList.add("show-details-container");
        } else if (result.state == "denied") {
          detailsContainer.classList.add("show-details-container");
        }
      });

    // If the user click on the permission buttons, show the description container
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        permissionStatus.onchange = function () {
          switch (this.state) {
            case "granted":
              detailsContainer.classList.add("show-details-container");
              break;
            case "denied":
              detailsContainer.classList.add("show-details-container");
              break;
            default:
              break;
          }
        };
      });
  }
};

getGeolocation();
showContainerDetails();
