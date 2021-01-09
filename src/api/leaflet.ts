import L, { LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

export const mymap = L.map("mapid", { zoomControl: false });

let mapMarker = {};

mymap.setView([51.505, -0.09], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA",
  }
).addTo(mymap);

export const iconMarker = L.icon({
  iconUrl: icon,
  iconSize: [30, 50],
  iconAnchor: [22, 96],
  shadowUrl: iconShadow,
});

mymap.panBy([0, -100]);

export const changeLocation = (latlong: LatLngExpression) => {
  mymap.flyTo(latlong, 13);
  mymap.once("moveend", () => {
    mymap.panBy([0, -100]);
    mapMarker = L.marker(latlong, { icon: iconMarker }).addTo(mymap);
  });
};

// Disable user interactivity
mymap.dragging.disable();
mymap.scrollWheelZoom.disable();
