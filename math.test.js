import { add, subtract, multiply, divide, operate } from "./math";

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

  test("operate function should perform arithmetic operations on two numbers with an operator", () => {
    expect(operate(2, 3, "+")).toBe(5);
    expect(operate(10, 5, "-")).toBe(5);
    expect(operate(4, 5, "*")).toBe(20);
    expect(operate(10, 2, "/")).toBe(5);
    const consoleSpy = jest.spyOn(console, "log");
    expect(operate(2, 3, "%")).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      "%",
      'Unable to perform operation, please provide one of the following operators "+, -, *, /"'
    );
    consoleSpy.mockRestore();
  });
});
