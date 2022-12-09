const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".btn");
const display = calculator.querySelector(".display-evaluation");

keys.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const type = key.dataset.type;
  const { previousKeyType } = calculator.dataset;
  // is this a no. key
  if (type === "number") {
    if (displayValue === "0" || previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  // is this an operator key?

  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll(`[data-type="operator"]`);
    operatorKeys.forEach((el) => (el.dataset.state = ""));
    // console.log(operatorKeys);
    key.dataset.state = "selected";
    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }
  if (type === "equal") {
    // perform a calculations
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
    // console.log(firstNumber, operator, secondNumber);

    display.textContent = calculate(firstNumber, operator, secondNumber);
  }
  calculator.dataset.previousKeyType = type;

  //   console.log(typeof keyValue);
});














function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  let result = "";
  if (operator === "plus") result = firstNumber + secondNumber;
  if (operator === "minus") result = firstNumber - secondNumber;
  if (operator === "times") result = firstNumber * secondNumber;
  if (operator === "divide") result = firstNumber / secondNumber;
  console.log(result);

// switch(operator) {
//     case "plus": result = firstNumber + secondNumber;
//     case "minus": result = firstNumber - secondNumber;
//     case "times": result = firstNumber * secondNumber;
//     case "divide": result = firstNumber / secondNumber;
// }
  return result;
 
}
