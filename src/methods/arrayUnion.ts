/**
 * Returns a new array containing all unique elements from both arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing unique elements from `array1` and `array2`.
 * @template T
 */
export function arrayUnion<T>(array1: T[], array2: T[]): T[] {
    return [...new Set([...array1, ...array2])];
}
