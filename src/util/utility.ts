import { airQuality, detailsContainer } from "./selectors";

export const showMessageError = () => {
  const message = document.createElement("span");
  message.setAttribute("id", "error-message");
  detailsContainer.appendChild(message);
  detailsContainer.classList.add("hide-details");
};

export const removeMessageError = () => {
  const message = document.getElementById("error-message") as HTMLSpanElement;
  if (message) {
    detailsContainer.removeChild(message);
    detailsContainer.classList.remove("hide-details");
  }
};

export const setMultipleHtmlElements = (
  node: NodeListOf<HTMLParagraphElement>,
  text: string
) => {
  Array.from(node).forEach((element) => {
    element.innerHTML = text;
  });
};

export const setMultipleCSSClass = (
  node: NodeListOf<HTMLParagraphElement>,
  CssClass: string
) => {
  Array.from(node).forEach((element) => {
    element.classList.add(CssClass);
  });
};

export const removeAllCSSClass = (node: NodeListOf<HTMLParagraphElement>) => {
  Array.from(node).forEach((element) => {
    element.removeAttribute("class");
  });
};

export const handleAirQualityColor = (result: Number) => {
  removeAllCSSClass(airQuality);
  if (result < 50) {
    setMultipleCSSClass(airQuality, "good");
  } else if (result > 50 && result < 100) {
    setMultipleCSSClass(airQuality, "moderate");
  } else if (result > 100 && result < 150) {
    setMultipleCSSClass(airQuality, "unhealthy-sensitive");
  }
};
