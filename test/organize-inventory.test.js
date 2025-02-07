import { describe, expect, it } from "vitest";
import { organizeInventory } from "../src/organize-inventory";

describe("Santa Claus", () => {
  it("should be a function", () => {
    expect(typeof organizeInventory).toBe("function");
  });

  it("should receive an array", () => {
    expect(() => organizeInventory()).toThrow();
  });

  it("should receive an array of objects", () => {
    expect(() => organizeInventory([1])).toThrow();
    expect(() => organizeInventory([undefined])).toThrow();
    expect(() => organizeInventory([""])).toThrow();
  });

  it("should have a concise structure", () => {
    expect(() => organizeInventory([{}])).toThrow();
  });

  it("should organize", () => {
    const inventory = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];

    const inventory2 = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];

    expect(organizeInventory(inventory)).toStrictEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });

    expect(organizeInventory(inventory2)).toStrictEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
