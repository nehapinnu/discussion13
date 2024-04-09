document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  heading.classList.add("heading");
});

document.addEventListener("dblclick", function () {
  const currentTime = new Date().toLocaleTimeString();
  alert(`Current time: ${currentTime}`);
});

const toggleCheckbox = document.getElementById("toggle");
const emailBox = document.getElementById("emailBox");

toggleCheckbox.addEventListener("click", function () {
  if (toggleCheckbox.checked) {
    emailBox.classList.remove("hidden");
  } else {
    emailBox.classList.add("hidden");
  }
});
