import { orderBy } from "./orderBy";

describe("orderBy", () => {
    it("should return an empty array when input is empty", () => {
        expect(orderBy([], x => x)).toEqual([]);
    });

    it("should sort an array of numbers in ascending order", () => {
        const input = [5, 2, 9, 1, 5, 6];
        const output = orderBy(input, x => x);
        expect(output).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("should sort an array of strings alphabetically", () => {
        const input = ["banana", "apple", "cherry"];
        const output = orderBy(input, x => x);
        expect(output).toEqual(["apple", "banana", "cherry"]);
    });

    it("should sort an array of objects based on a key", () => {
        const input = [
            { id: 3, name: "Charlie" },
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
        ];
        const output = orderBy(input, x => x.id);
        expect(output).toEqual([
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" }
        ]);
    });

    it("should correctly handle duplicate elements", () => {
        const input = [3, 1, 2, 1, 3];
        const output = orderBy(input, x => x);
        expect(output).toEqual([1, 1, 2, 3, 3]);
    });

    it("should maintain the original order for equal keys (stable sort)", () => {
        const input = [
            { name: "Alice", age: 30 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 30 }
        ];
        // When sorting by age, the original order should be maintained
        const output = orderBy(input, x => x.age);
        expect(output).toEqual(input);
    });

    it("should handle undefined keys correctly", () => {
        const input = [1, 2, 3];
        // All keys will be undefined, so the original order is maintained
        const output = orderBy(input, () => undefined);
        expect(output).toEqual([1, 2, 3]);
    });

    it("should throw an error if input is not an array", () => {
        expect(() => orderBy(null as any, x => x)).toThrow("Input must be an array");
        expect(() => orderBy("not an array" as any, x => x)).toThrow("Input must be an array");
    });
});
