import { sliders, arrowRight, arrowLeft } from "./selectors";

let slideIndex: number = 1;

const handleArrow = (n: number) => {
  handleSlider((slideIndex = slideIndex + n));
};

const handleSlider = (n: number) => {
  if (n > sliders.length) {
    slideIndex = sliders.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }

  // handle arrow opacity
  if (n + 1 > sliders.length) arrowRight.style.opacity = 0.2;
  else {
    arrowRight.style.opacity = 1;
  }
  if (n < 2) arrowLeft.style.opacity = 0.2;
  else {
    arrowLeft.style.opacity = 1;
  }

  Array.from(sliders).forEach((element) => {
    element.classList.remove("show");
  });

  sliders[slideIndex - 1].classList.add("show");
};

handleSlider(slideIndex);

arrowLeft.addEventListener("click", () => handleArrow(-1));
arrowRight.addEventListener("click", () => handleArrow(+1));
