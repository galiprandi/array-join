import { describe, expect, it } from "vitest";
import { orderBy } from "./orderBy";

describe("orderBy", () => {
    it("should order numbers in ascending order", () => {
        expect(orderBy([3, 1, 2], x => x)).toEqual([1, 2, 3]);
    });

    it("should order numbers in descending order", () => {
        expect(orderBy([3, 1, 2], x => x, "desc")).toEqual([3, 2, 1]);
    });
});
