/**
 * Returns the common elements between two arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} A new array containing elements that exist in both `array1` and `array2`.
 * @template T
 */
export function arrayIntersection<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => array2.includes(item));
}
