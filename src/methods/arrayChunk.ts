/**
 * Splits an array into chunks of a given size.
 * @param {T[]} array - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} A new array containing chunks of the original array.
 * @throws {Error} If size is less than 1.
 * @template T
 */
export function arrayChunk<T>(array: T[], size: number): T[][] {
    if (size < 1) throw new Error("Chunk size must be greater than 0");
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
