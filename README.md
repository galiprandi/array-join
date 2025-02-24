# array-join

🚀 **array-join** is a powerful and lightweight utility library that enables SQL-like operations on JavaScript arrays. It provides functions for performing common set operations such as differences, intersections, unions, and ordering. Designed for developers who need efficient and immutable data manipulation, `array-join` makes array operations intuitive and performant.

## 📖 Overview

This library offers the following methods:

- `arrayDifference(arr1, arr2)`: Returns elements in the first array that are not present in the second.
- `arrayIntersection(arr1, arr2)`: Returns elements common to both arrays.
- `arrayUnion(arr1, arr2)`: Merges two arrays, removing duplicates.
- `arrayDistinct(arr1, arr2)`: Finds elements that are unique to each array.
- `orderBy(arr, keySelector, order)`: Sorts an array based on a specified key.
- `arrayChunk(arr, size)`: Splits an array into smaller chunks.

Each method is **immutable**, meaning that it does not modify the original arrays, ensuring safer and more predictable data transformations.

---

## 🔹 `arrayDifference(arr1, arr2)`
Finds elements in the first array that **do not exist** in the second array. This is useful for identifying missing items in datasets, detecting removed elements, or performing comparisons between two lists of records.

### Example
```ts
const result = arrayDifference(["🍎", "🍌", "🍓", "🍍"], ["🍌", "🍍"]);
console.log(result); // ["🍎", "🍓"]
```

### Use Cases
- Identifying removed items from an inventory.
- Detecting missing ingredients in a recipe.
- Filtering out existing records from a dataset.

---

## 🔹 `arrayIntersection(arr1, arr2)`
Finds elements that are **common** to both arrays. This is ideal for finding shared records, identifying common elements between different datasets, or detecting duplicate entries across multiple sources.

### Example
```ts
const result = arrayIntersection(["🍎", "🍌", "🍓", "🍍"], ["🍌", "🍍", "🍇"]);
console.log(result); // ["🍌", "🍍"]
```

### Use Cases
- Finding common fruits in two baskets.
- Identifying overlapping ingredients in recipes.
- Comparing two arrays to find mutual entries.

---

## 🔹 `arrayUnion(arr1, arr2)`
Combines two arrays and **removes duplicates**, ensuring that each element appears only once in the resulting array. This is useful for merging lists, aggregating data, and unifying records.

### Example
```ts
const result = arrayUnion(["🍎", "🍌", "🍓"], ["🍓", "🍍", "🍇"]);
console.log(result); // ["🍎", "🍌", "🍓", "🍍", "🍇"]
```

### Use Cases
- Merging fruit lists from different suppliers.
- Aggregating shopping lists without duplicate items.
- Creating a combined list of unique products.

---

## 🔹 `arrayDistinct(arr1, arr2)`
Finds elements that are **unique** to each array, meaning they do not exist in both. This helps identify exclusive records, compare datasets, and filter out shared elements.

### Example
```ts
const result = arrayDistinct(["🍎", "🍌", "🍓"], ["🍌", "🍓", "🍍"]);
console.log(result); // ["🍎", "🍍"]
```

### Use Cases
- Identifying fruits unique to each basket.
- Finding differences between two recipe ingredient lists.
- Highlighting exclusive records in two arrays.

---

## 🔹 `orderBy(arr, keySelector, order = 'asc')`
Sorts an array by a specified key in ascending or descending order. This method is useful for arranging structured data, ordering records, and implementing sorted views for lists.

### Example
```ts
const data = [{ name: "🍍" }, { name: "🍎" }, { name: "🍌" }];
const result = orderBy(data, item => item.name, "asc");
console.log(result); // [{ name: "🍎" }, { name: "🍌" }, { name: "🍍" }]
```

### Use Cases
- Sorting fruit names alphabetically.
- Arranging grocery lists by category.
- Ordering product lists by name or price.

---

## 🔹 `arrayChunk(arr, size)`
Divides an array into smaller chunks of the given size, making it easier to process large datasets in smaller, manageable portions.

### Example
```ts
const result = arrayChunk(["🍎", "🍌", "🍓", "🍍", "🍇"], 2);
console.log(result); // [["🍎", "🍌"], ["🍓", "🍍"], ["🍇"]]
```

### Use Cases
- Implementing pagination in a UI.
- Splitting large grocery lists into smaller categories.
- Organizing bulk items into manageable groups.

---

## 🚀 Why Use `array-join`?
✅ **Immutable operations** – no side effects.  
✅ **Lightweight & performant** – optimized for speed.  
✅ **TypeScript support** – strong typing for safer code.  
✅ **Simple API** – easy to use and integrate.  

---

## 🎯 Contributing
We welcome contributions! Feel free to open an issue or submit a pull request.

---

## 📝 License
This project is licensed under the MIT License.
