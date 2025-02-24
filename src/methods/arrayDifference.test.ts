import { describe, expect, it } from "vitest";
import { arrayDifference } from "./arrayDifference";

describe("arrayDifference", () => {
    it("should return elements in the first array that are not in the second", () => {
        expect(arrayDifference([1, 2, 3], [2, 3])).toEqual([1]);
    });

    it("should return an empty array if all elements are in both arrays", () => {
        expect(arrayDifference([1, 2], [1, 2])).toEqual([]);
    });

    it("should return the original array if the second array is empty", () => {
        expect(arrayDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
});
