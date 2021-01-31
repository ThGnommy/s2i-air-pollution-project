export const showToast = () => {
  const toastContainer = document.getElementById("toast")! as HTMLDivElement;
  const toast = document.createElement("span");
  toast.classList.add("show-toast");
  toast.innerHTML = "City not found.";
  toastContainer.appendChild(toast);
};
