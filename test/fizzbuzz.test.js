import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("FizzBuzz", () => {
  it("should throw an error if the parameter is not a number", () => {
    expect(() => fizzbuzz()).toThrow("The parameter must be a number");
  });

  it("should throw an error if the parameter is not a number", () => {
    expect(() => fizzbuzz(NaN)).toThrow("The parameter must be a number");
  });

  it("should return 'fizz' if the number is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(27)).toBe("fizz");
  });

  it("should return 'buzz' if the number is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(25)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if the number is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
