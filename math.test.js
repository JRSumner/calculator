import { add, subtract, multiply, divide } from "./math";

describe("math functions", () => {
  test("add function should add two numbers together", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, -5)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  test("subtract function should subtract one number from another", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, -5)).toBe(15);
    expect(subtract(0, 0)).toBe(0);
  });

  test("multiply function should multiply two numbers together", () => {
    expect(multiply(5, 3)).toBe(15);
    expect(multiply(10, -5)).toBe(-50);
    expect(multiply(0, 0)).toBe(0);
  });

  test("divide function should divide one number by another", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(10, -5)).toBe(-2);
    expect(divide(0, 5)).toBe(0);
  });
});
