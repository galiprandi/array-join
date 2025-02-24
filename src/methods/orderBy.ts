/**
 * Sorts an array based on a given key extractor function.
 * @param {T[]} array - The array to be sorted.
 * @param {(item: T) => any} keyExtractor - Function to extract the key for sorting.
 * @param {"asc" | "desc"} [order="asc"] - The sorting order ("asc" for ascending, "desc" for descending).
 * @returns {T[]} A new sorted array.
 * @template T
 */
export function orderBy<T>(array: T[], keyExtractor: (item: T) => any, order: "asc" | "desc" = "asc"): T[] {
    return [...array].sort((a, b) => {
        const keyA = keyExtractor(a);
        const keyB = keyExtractor(b);
        return order === "asc" ? (keyA > keyB ? 1 : -1) : (keyA < keyB ? 1 : -1);
    });
}
