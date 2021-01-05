import { mymap } from "./../api/leaflet";

if ("geolocation" in navigator) {
  const currentPosition = navigator.geolocation.getCurrentPosition(
    (position) => {
      return [position.coords.latitude, position.coords.longitude];
    }
  );
  mymap.setView(currentPosition, 13);
} else {
  console.log("Geolocation is disable");
}
