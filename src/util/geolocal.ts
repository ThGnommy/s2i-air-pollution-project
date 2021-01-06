const getGeolocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      //   latLng = [position.coords.latitude, position.coords.longitude];
      console.log("Geolocation available!");
      return [latitude, longitude] ?? [0, 0];
    });
  } else {
    console.log("Geolocation is disable");
  }
};

console.log(getGeolocation());
