const section = document.querySelector(".sec");
const button = document.querySelector(".btn");
const bgText = document.querySelector(".bg-text");
const clipPath = document.querySelector(".clipPath");
const inputFocus = document.querySelector(".newColor-input");

let newColor;

button.addEventListener("click", (e) => {
  e.preventDefault();

  newColor = inputFocus.value;
  section.style.background = newColor;
  clipPath.style.background = newColor;
  clipPath.classList.add("active");
  bgText.classList.add("fade");
  bgText.textContent = newColor;
});

inputFocus.addEventListener("focus", () => {
  clipPath.classList.remove("active");
  bgText.classList.remove("fade");
});
