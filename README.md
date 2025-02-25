# array-join

🚀 **array-join** is a powerful and lightweight utility library that enables SQL-like operations on JavaScript arrays. This library offers functions for performing common set operations such as differences, intersections, unions, distinct, ordering, and chunking. All methods are **optimized** for the best performance, using efficient data structures (like `Set`) and advanced techniques (for example, the Schwartzian transform in `orderBy`) without modifying the original arrays (immutable operations).

## 📖 Overview

The library includes the following methods:

- **`arrayDifference(arr1, arr2)`**: Returns elements in the first array that **do not exist** in the second.
- **`arrayIntersection(arr1, arr2)`**: Returns elements common to both arrays.
- **`arrayUnion(arr1, arr2)`**: Merges two arrays and removes duplicates, returning only unique elements.
- **`arrayDistinct(arr1, arr2)`**: Returns elements that are **unique** to each array (those not present in both).
- **`orderBy(arr, keySelector, order)`**: Sorts an array based on a specified key, using the Schwartzian transform to improve performance.
- **`arrayChunk(arr, size)`**: Splits an array into smaller chunks of the given size.

Each method is designed to be **immutable** (does not modify the original array) and is optimized for superior performance.

## arrayDifference(arr1, arr2)

Returns the elements in the first array that **are not present** in the second. It uses a `Set` to optimize element lookup.

### Example

```ts
const result = arrayDifference(["🍎", "🍌", "🍓", "🍍"], ["🍌", "🍍"]);
console.log(result); // ["🍎", "🍓"]
```

### Use Cases

- Detecting removed items from an inventory.
- Filtering out existing records from a dataset.
- Comparing lists to identify differences.

## arrayIntersection(arr1, arr2)

Returns the elements **common** to both arrays, optimized using a `Set`.

### Example

```ts
const result = arrayIntersection(["🍎", "🍌", "🍓", "🍍"], ["🍌", "🍍", "🍇"]);
console.log(result); // ["🍌", "🍍"]
```

### Use Cases

- Finding shared items between two lists.
- Detecting duplicate records across multiple sources.
- Comparing datasets for common entries.

## arrayUnion(arr1, arr2)

Merges two arrays and removes duplicates, ensuring each element appears only once. This operation is immutable and optimized using efficient data structures.

### Example

```ts
const result = arrayUnion(["🍎", "🍌", "🍓"], ["🍓", "🍍", "🍇"]);
console.log(result); // ["🍎", "🍌", "🍓", "🍍", "🍇"]
```

### Use Cases

- Combining product lists from different suppliers.
- Merging inventories without duplicate records.
- Aggregating unique items from multiple arrays.

## arrayDistinct(arr1, arr2)

Returns the elements that are **unique** to each array, meaning they do not exist in both.

### Example

```ts
const result = arrayDistinct(["🍎", "🍌", "🍓"], ["🍌", "🍓", "🍍"]);
console.log(result); // ["🍎", "🍍"]
```

### Use Cases

- Identifying unique elements in comparative sets.
- Highlighting differences between two lists.
- Detecting exclusive records in datasets.

## orderBy(arr, keySelector, order = "asc")

Sorts an array based on a key extracted by the `keySelector` function. This method uses the Schwartzian transform (decorate-sort-undecorate) to compute each element’s key only once, which is beneficial when key extraction is costly.

> **Warning:** This method uses the Schwartzian pattern, which might not be optimal in cases where the `keySelector` function is simple and inexpensive. In such cases, it is recommended to use a direct sort without decorating and undecorating to avoid the additional overhead.

### Example: Ascending Order (Default)

```ts
const data = [
  { name: "🍍", price: 10 },
  { name: "🍎", price: 5 },
  { name: "🍌", price: 7 }
];
const resultAsc = orderBy(data, item => item.price);
console.log(resultAsc);
// Output:
// [
//   { name: "🍎", price: 5 },
//   { name: "🍌", price: 7 },
//   { name: "🍍", price: 10 }
// ]
```

### Example: Descending Order

```ts
const data = [
  { name: "🍍", price: 10 },
  { name: "🍎", price: 5 },
  { name: "🍌", price: 7 }
];
const resultDesc = orderBy(data, item => item.price, "desc");
console.log(resultDesc);
// Output:
// [
//   { name: "🍍", price: 10 },
//   { name: "🍌", price: 7 },
//   { name: "🍎", price: 5 }
// ]
```

### Use Cases

- Sorting records for UI display.
- Organizing data for reports.
- Implementing ordered views in applications.

## arrayChunk(arr, size)

Splits an array into smaller chunks of the specified size, making it easier to process large datasets in manageable portions.

### Example

```ts
const result = arrayChunk(["🍎", "🍌", "🍓", "🍍", "🍇"], 2);
console.log(result); // [["🍎", "🍌"], ["🍓", "🍍"], ["🍇"]]
```

### Use Cases

- Implementing pagination in UI.
- Processing data in small batches.
- Organizing large collections into manageable groups.

## arrayChunkBy(arr, keySelector)

Groups consecutive elements of an array into chunks based on a key derived from each element using the provided `keySelector` function. A new chunk is started every time the key value changes. This method is immutable and operates in **O(n)** time.

### Example 1

```ts
const result = arrayChunkBy([1, 1, 2, 2, 3, 1], x => x);
console.log(result);
// Output: [[1, 1], [2, 2], [3], [1]]
```

### Example 2

Grouping an array of strings by their first letter:

```ts
const fruits = ["apple", "ant", "banana", "berry", "cherry", "citrus"];
const groupedFruits = arrayChunkBy(fruits, word => word[0]);
console.log(groupedFruits);
// Output: [["apple", "ant"], ["banana", "berry"], ["cherry", "citrus"]]
```

### Use Cases

- **Data Grouping:** Organize consecutive items in logs, sensor readings, or transactions.
- **Report Generation:** Segment sorted data into meaningful groups for summaries.
- **UI Rendering:** Group list items into distinct sections for improved display.

## 🚀 Why Use array-join?

- **Optimized Performance:** All methods are optimized for the best performance using advanced techniques and efficient data structures.
- **Immutable Operations:** Functions do not modify the original arrays, ensuring safer and more predictable data transformations.
- **Lightweight & Efficient:** The library is small and designed to be highly performant.
- **TypeScript Support:** Strong typing for safer code.
- **Simple API:** Easy to integrate and use in any project.

## 🎯 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is licensed under the MIT License.

```
```
