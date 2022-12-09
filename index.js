const screenDisplay = document.querySelector("#evaluation");
const buttons = document.querySelectorAll("button");

let calculations = [];
let accumulatveCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculations = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    console.log(accumulatveCalculation);
    screenDisplay.textContent = eval(accumulatveCalculation);
  } else {
    calculations.push(value);
    accumulatveCalculation = calculations.join("");
    screenDisplay.textContent = accumulatveCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    calculate(button);
  })
);
