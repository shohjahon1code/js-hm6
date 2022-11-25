const elForm = document.querySelector(".form");
const elInput1 = document.querySelector("#input1");
const elInput2 = document.querySelector("#input2");
const elContent = document.querySelector("p");

function getRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const RGB = `rgb(${r}, ${g}, ${b})`;
  elContent.style.backgroundColor = RGB;
}

function addSquare() {
  if (
    elInput1.value !== "" &&
    elInput2.value !== "" &&
    elInput1.value > 10 &&
    elInput2.value > 10
  ) {
    const value1 = Number(elInput1.value);
    const value2 = Number(elInput2.value);
    getRandomColor(); // get random bg
    elContent.style.width = `${value1}px`;
    elContent.style.height = `${value2}px`;
    elInput1.value = "";
    elInput2.value = "";
  } else {
    alert("Bush qoldirmang yoki O'ndan katta son kiriting");
    elInput1.value = "";
    elInput2.value = "";
    elInput1.focus();
  }
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addSquare();
});
