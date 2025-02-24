import { describe, expect, it } from "vitest";
import { arrayDistinct } from "./arrayDistinct";

describe("arrayDistinct", () => {
    it("should return elements that are not in both arrays", () => {
        expect(arrayDistinct([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
    });

    it("should return an empty array if both arrays are identical", () => {
        expect(arrayDistinct([1, 2, 3], [1, 2, 3])).toEqual([]);
    });
});
