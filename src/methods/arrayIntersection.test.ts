import { describe, expect, it } from "vitest";
import { arrayIntersection } from "./arrayIntersection";

describe("arrayIntersection", () => {
    it("should return common elements between two arrays", () => {
        expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    it("should return an empty array if there are no common elements", () => {
        expect(arrayIntersection([1, 2], [3, 4])).toEqual([]);
    });
});
