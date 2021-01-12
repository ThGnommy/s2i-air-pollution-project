import { toast } from "./selectors";

export const showToast = () => {
  toast.classList.add("show-toast");
  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 4000);
};

export const showToast2 = () => {
  const toastContainer = document.getElementById("toast")! as HTMLDivElement;
  const toast = document.createElement("span");
  toast.classList.add("show-toast");
  toast.innerHTML = "City not found...";
  toastContainer.appendChild(toast);
};
