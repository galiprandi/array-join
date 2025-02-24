import { describe, expect, it } from "vitest";
import { arrayChunk } from "./arrayChunk";

describe("arrayChunk", () => {
    it("should split array into chunks of the specified size", () => {
        expect(arrayChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("should throw an error if chunk size is 0 or negative", () => {
        expect(() => arrayChunk([1, 2, 3], 0)).toThrow();
    });
});
