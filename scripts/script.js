const elDisplay1 = document.querySelector(".display-1");
const elDisplay2 = document.querySelector(".display-2");
const elResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".btn");
const elOperations = document.querySelectorAll(".divide");
const elEqual = document.querySelector(".equal");
const elClear = document.querySelector(".delete");

//variables
let displayNumber1 = "";
let displayNumber2 = "";
let lastoperation = "";
let result = null;

// iterable and click btns
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    displayNumber2 += e.target.textContent;
    elDisplay2.textContent = displayNumber2;
  });
});

// choose operators
elOperations.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!displayNumber2) return;
    let targetOperation = e.target.textContent;
    if (displayNumber1 && displayNumber2 && targetOperation) {
      calculate();
    } else {
      result = parseFloat(displayNumber2);
    }
    addTop(targetOperation);
    lastoperation = targetOperation;
  });
});

// add to top
function addTop(name = "") {
  displayNumber1 += displayNumber2 + name + " ";
  elDisplay1.textContent = displayNumber1;
  elDisplay2.textContent = "";
  displayNumber2 = "";
  result.textContent = result;
}

// calculateAll
function calculate() {
  switch (lastoperation) {
    case "x":
      result = parseFloat(result) * parseFloat(displayNumber2);
      break;
    case "+":
      result = parseFloat(result) + parseFloat(displayNumber2);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(displayNumber2);
      break;
    case "/":
      result = parseFloat(result) / parseFloat(displayNumber2);
      break;
  }
}

// resultAll
elEqual.addEventListener("click", () => {
  if (!displayNumber2 || !displayNumber1) return;
  calculate();
  elDisplay2.textContent = result;
  elResult.textContent = "";
  displayNumber2 = result;
  displayNumber1 = "";
});

//clear:
elClear.addEventListener("click", clearAll);
function clearAll() {
  displayNumber1 = "";
  displayNumber2 = "";
  elDisplay1.innerHTML = displayNumber1;
  elDisplay2.innerHTML = displayNumber2;
  result = "";
}
