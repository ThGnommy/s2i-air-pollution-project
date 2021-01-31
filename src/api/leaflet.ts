import L, { LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

export let mymap: L.Map = L.map("mapid", { zoomControl: false });

let mapMarker: L.Marker;

mymap.setView([51.505, -0.09], 13);

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.MAPBOX_TOKEN}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: process.env.MAPBOX_TOKEN,
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
    if (mapMarker) {
      mapMarker.remove();
    }
    mymap.panBy([0, -100]);
    mapMarker = L.marker(latlong, { icon: iconMarker }).addTo(mymap);
  });
};

// Disable user interactivity
mymap.dragging.disable();
mymap.scrollWheelZoom.disable();
mymap.touchZoom.disable();
