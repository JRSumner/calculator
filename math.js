export const add = (num1, num2) => Number(num1) + Number(num2);
export const subtract = (num1, num2) => Number(num1) - Number(num2);
export const multiply = (num1, num2) => Number(num1) * Number(num2);
export const divide = (num1, num2) => Number(num1) / Number(num2);

export function operate(num1, num2, operator) {
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
