import { describe, expect, it } from "vitest";
import { arrayUnion } from "./arrayUnion";

describe("arrayUnion", () => {
    it("should return the union of two arrays without duplicates", () => {
        expect(arrayUnion([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should return the same array if one of them is empty", () => {
        expect(arrayUnion([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
});
