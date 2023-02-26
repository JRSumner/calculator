currentBtn();
display();

let firstNumber = "";
let secondNumber = "";
let operator = "";
let operatorSelected = false;

function addButtonClickListeners() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      switch (button.textContent) {
        case "=":
          displayResult();
          break;
        case "C":
          clearDisplay();
          break;
        default:
          handleNumberButton(button);
          handleOperatorButton(button);
          break;
      }
    });
  });
}

function handleNumberButton(button) {
  if (!operatorSelected && !isNaN(Number(button.textContent))) {
    firstNumber += button.textContent;
    display(firstNumber);
  } else if (operatorSelected && !isNaN(Number(button.textContent))) {
    secondNumber += button.textContent;
    display(secondNumber);
  }
}

function handleOperatorButton(button) {
  if (isOperator(button.textContent)) {
    operatorSelected = true;
    operator = button.textContent;
  }
}

function display(value = 0) {
  const display = document.querySelector(".display span");
  display.textContent = value;
}

function displayResult() {
  const result = operate(Number(firstNumber), Number(secondNumber), operator);
  display(result);
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operatorSelected = false;
  display(0);
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}
