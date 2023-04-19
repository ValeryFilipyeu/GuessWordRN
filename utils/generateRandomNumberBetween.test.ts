import { generateRandomBetween } from "./generateRandomNumberBetween";

describe("generateRandomBetween tests", () => {
  test("returns a number within the specified range and not equal to the excluded number", () => {
    const result = generateRandomBetween(1, 10, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(result).not.toBe(5);
  });

  test("returns a number within the specified range and not equal to the excluded number when the excluded number is the minimum value", () => {
    const result = generateRandomBetween(1, 10, 1);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(10);
    expect(result).not.toBe(1);
  });

  test("returns a number within the specified range and not equal to the excluded number when the excluded number is the maximum value", () => {
    const result = generateRandomBetween(1, 10, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(9);
    expect(result).not.toBe(10);
  });

  test("returns the minimum value when the minimum and maximum values are the same and the excluded number is also the same", () => {
    const result = generateRandomBetween(5, 5, 5);
    expect(result).toBe(5);
  });

  test("returns zero value when the minimum value is greater than the maximum value", () => {
    const result = generateRandomBetween(10, 5, 7);
    expect(result).toBe(0);
  });
});