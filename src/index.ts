// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA
// Import styles
import "../src/reset.css";
import "../src/style.css";
import { LatLngExpression } from "leaflet";
import { changeLocation } from "./api/leaflet";
import { fetchAutoGeolocation } from "./util/fetch";

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
    });
  } else {
    console.log("Geolocation is not available");
  }
};

const url =
  "https://api.waqi.info/feed/modena/?token=c8f3fb8806f350497f7a43ce886f000306bced4a";

// fetchData(url);
getGeolocation();
