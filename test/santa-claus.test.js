import { describe, expect, it } from "vitest";
import { santaClaus } from "../src/santa-claus";

describe("Santa Claus", () => {
  // Write your tests here
  it("should a function", () => {
    expect(typeof santaClaus).toBe("function");
  });

  it("should receive an array of integers", () => {
    expect(santaClaus([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should not have duplicated integers", () => {
    expect(santaClaus([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should be in ascending order", () => {
    expect(santaClaus([2, 1, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
  });
});
