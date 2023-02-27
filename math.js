const add = (num1, num2) => Number(num1) + Number(num2);
const subtract = (num1, num2) => Number(num1) - Number(num2);
const multiply = (num1, num2) => Number(num1) * Number(num2);
const divide = (num1, num2) => Number(num1) / Number(num2);

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      console.log(
        operator,
        'Unable to perform operation, please provide one of the following operators "+, -, *, /"'
      );
      break;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate,
};
