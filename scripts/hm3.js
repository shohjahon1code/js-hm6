const elForm = document.querySelector("form");
const elinput1 = document.querySelector("#input1");
const elinput2 = document.querySelector("#input2");
const elinput3 = document.querySelector("#input3");
const elTriangle = document.querySelector("#triangle");

function makeTriangle() {
  const value1 = elinput1.value;
  const value2 = elinput2.value;
  const value3 = elinput3.value;

  if (value1 !== "" && value2 !== "" && value3 !== "" && value1 > value2) {
    elTriangle.style = `
    border-left: ${value1}px solid transparent;
    border-right: ${value2}px solid transparent;
    border-bottom: ${value3}px solid blue;
    `;
  } else {
    alert(
      `You entered invalid number or ${elinput1.value} smaller ${elinput2.value}`
    );
    value1 = "";
    value2 = "";
    value3 = "";
  }
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  makeTriangle();
  elinput1.value = "";
  elinput2.value = "";
  elinput3.value = "";
});
