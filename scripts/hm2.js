const elForm = document.querySelector(".form");
const elInput = document.querySelector("input");
const elContent = document.querySelector(".circle");

function makeCircle() {
  const inputValue = elInput.value;
  if (
    inputValue !== "" &&
    inputValue !== 0 &&
    inputValue >= 10 &&
    inputValue < 1000
  ) {
    elContent.style.backgroundColor = "blue";
    elContent.style.borderRadius = "50%";
    elContent.style.width = `${inputValue}px`;
    elContent.style.height = `${inputValue}px`;
  } else {
    alert("You entered invalid number!");
  }
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  makeCircle();
  elInput.value = "";
});
