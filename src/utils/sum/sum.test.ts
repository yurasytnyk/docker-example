import { sum } from "./sum";

const shoppingList = ["milk"];

describe("sum module", () => {
  it("adds 1 + 2 to equals 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 2 + 2 to equals 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("objest should have equal values", () => {
    const data = { one: 1, two: 2 };
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  it("null", () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it("zero", () => {
    const zero = 0;
    expect(zero).not.toBeNull();
    expect(zero).toBeDefined();
    expect(zero).not.toBeUndefined();
    expect(zero).not.toBeTruthy();
    expect(zero).toBeFalsy();
  });

  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    // This won't work because of rounding error
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
  });

  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  it("but there is a stop in Christoph", () => {
    expect("Christoph").toMatch(/stop/);
  });

  it("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
