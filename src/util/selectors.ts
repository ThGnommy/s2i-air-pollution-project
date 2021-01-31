export const airQuality = document.querySelectorAll(
  "#air-quality"
)! as NodeListOf<HTMLParagraphElement>;

export const localTime = document.querySelectorAll(
  "#local-time"
)! as NodeListOf<HTMLParagraphElement>;

export const city = document.querySelectorAll(
  "#city"
)! as NodeListOf<HTMLParagraphElement>;

export const input = document.querySelector("input")! as HTMLInputElement;

export const button = document.querySelector("button")! as HTMLButtonElement;

export const detailsContainer = document.getElementById(
  "details-container"
)! as HTMLElement;

export const mobileDetailsContainer = document.getElementById(
  "slider-container"
)! as HTMLDivElement;

// Slider Selectors

export const sliders = document.getElementsByClassName(
  "slider"
)! as HTMLCollectionOf<HTMLDivElement>;
export const arrowLeft: any = document.getElementById(
  "arrow-left"
)! as HTMLElement;
export const arrowRight: any = document.getElementById(
  "arrow-right"
)! as HTMLElement;
