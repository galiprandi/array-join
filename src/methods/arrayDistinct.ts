/**
 * Returns elements that are unique in either of the two arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements that are not in both arrays.
 * @template T
 */
export function arrayDistinct<T>(array1: T[], array2: T[]): T[] {
    return [...array1.filter(x => !array2.includes(x)), ...array2.filter(x => !array1.includes(x))];
}
