import { detailsContainer } from "./selectors";

export const showMessageError = () => {
  const message = document.createElement("span");
  message.setAttribute("id", "error-message");
  detailsContainer.appendChild(message);
  detailsContainer.classList.add("hide-details");
};

export const removeMessageError = () => {
  const message = document.getElementById("error-message")! as HTMLSpanElement;
  detailsContainer.removeChild(message);
  detailsContainer.classList.remove("hide-details");
};

export const setMultipleHtmlElements = (
  node: NodeListOf<HTMLParagraphElement>,
  text: string
) => {
  Array.from(node).forEach((element) => {
    element.innerHTML = text;
  });
};
