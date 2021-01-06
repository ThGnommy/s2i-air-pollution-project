// api key = c8f3fb8806f350497f7a43ce886f000306bced4a
// mapbox access token = pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA
// Import styles
import "../src/reset.css";
import "../src/style.css";
const url =
  "https://api.waqi.info/feed/modena/?token=c8f3fb8806f350497f7a43ce886f000306bced4a";

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
