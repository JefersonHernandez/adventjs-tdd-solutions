import { describe, expect, it } from "vitest";
import { framingNames } from "../src/framing-names";

describe("Framing Names", () => {
  // Write your tests here
  it("should a function", () => {
    expect(typeof framingNames).toBe("function");
  });

  it("should receive an array of strings", () => {
    expect(() => framingNames()).toThrow("The parameter must be an array");
    expect(() => framingNames("")).toThrow("The parameter must be an array");
  });

  it("should a return a table with names", () => {
    expect(framingNames(["midu"])).toBe(`********
* midu *
********`);
    expect(framingNames(["midu", "madeval", "educalvolpz"]))
      .toBe(`***************
* midu        *
* madeval     *
* educalvolpz *
***************`);
  });

  it("should a return a table with names", () => {
    expect(framingNames(["midu"])).toBe(`********
* midu *
********`);
    expect(framingNames(["a", "bb", "ccc"])).toBe(`*******
* a   *
* bb  *
* ccc *
*******`);
  });
});
