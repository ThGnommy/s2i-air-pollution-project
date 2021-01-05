// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA
// Import styles
import "../src/reset.css";
import "../src/style.css";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { mymap, instance } from "./api/leaflet";
const url =
  "https://api.waqi.info/feed/modena/?token=c8f3fb8806f350497f7a43ce886f000306bced4a";

mymap.setView([44, 10.81], 13);

instance
  .tileLayer(
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
  )
  .addTo(mymap);

const iconMarker = instance.icon({
  iconUrl: icon,
  iconSize: [30, 50],
  iconAnchor: [22, 96],
  shadowUrl: iconShadow,
});

instance.marker([44.644249, 10.923191], { icon: iconMarker }).addTo(mymap);

const fetchData = async (url: string) => {
  fetch(url)
    .then(
      (response): Promise<any> => {
        return response.json();
      }
    )
    .then(
      (data): Promise<any> => {
        console.log(data);
        return data;
      }
    );
};

fetchData(url);
getGeolocation();
