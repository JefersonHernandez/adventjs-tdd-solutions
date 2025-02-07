import { describe, expect, it } from "vitest";
import { createXmasTree } from "../src/create-xmas-tree";

describe("Xmas Tree", () => {
  // Write your tests here
  it("should a function", () => {
    expect(typeof createXmasTree).toBe("function");
  });

  it("should receive allowed params", () => {
    expect(() => createXmasTree()).toThrow();
    expect(() => createXmasTree(101, "@")).toThrow();
    expect(() => createXmasTree(-1, "@")).toThrow();
    expect(() => createXmasTree(1, "")).toThrow();
  });

  it("should draw a little tree", () => {
    expect(createXmasTree(5, "*")).toBe(`____*____
___***___
__*****__
_*******_
*********
____#____
____#____`);

    expect(createXmasTree(6, "@")).toBe(`_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`);
  });
});
