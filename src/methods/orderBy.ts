/**
 * Sorts an array based on a key extracted by the keySelector function.
 * Utilizes the Schwartzian transform (decorate-sort-undecorate) pattern to improve performance
 * in scenarios where the key extraction is costly.
 *
 * @param array - The array to sort.
 * @param keySelector - A function that extracts the comparison key from each element.
 * @returns A new array sorted in ascending order.
 *
 * @warning This method uses the Schwartzian pattern, which might not be optimal in cases where 
 * the keySelector function is simple and inexpensive. In such cases, it is recommended to use a 
 * direct sort without decorating and undecorating to avoid the additional overhead.
 *
 * @template T
 */
export function orderBy<T>(array: T[], keySelector: (item: T) => any): T[] {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array");
    }

    // Decorate: Map each item to an object with the item and its computed key
    const decorated = array.map(item => ({ item, key: keySelector(item) }));

    // Sort: Use the computed keys to sort the decorated array (O(n log n))
    decorated.sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
    });

    // Undecorate: Extract the original items from the sorted decorated array
    return decorated.map(deco => deco.item);
}
