/**
 * Returns the elements in the first array that are not present in the second array.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements from `array1` that are not in `array2`.
 * @template T
 */
export function arrayDifference<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => !array2.includes(item));
}
