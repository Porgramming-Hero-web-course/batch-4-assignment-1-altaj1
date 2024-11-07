# Why Type Guards Are Necessary in TypeScript: An Introduction to Type Guards and Their Use Cases

In TypeScript, one of the main goals is to make your code safer and reduce errors by enforcing type checks. But sometimes, you may still run into scenarios where you aren’t sure of a variable’s type, or you may have a variable that could be of multiple types. This is where **type guards** come in.

Type guards help TypeScript understand what type a variable has at a particular point in your code, allowing you to work more safely with your data and avoid common runtime errors. In this post, we’ll break down why type guards are essential and introduce different types of type guards with real-life examples.

---

## Why Are Type Guards Necessary?

TypeScript’s type system provides safety, but it’s limited when dealing with **union types**—variables that could be one of multiple types (e.g., `string | number`). Without type guards, TypeScript cannot always figure out what type a variable is. For example, you might want to use a method specific to strings, but if TypeScript isn’t sure your variable is a string, it will throw an error.

Type guards help solve this problem by narrowing down the type, allowing TypeScript to "guard" the code that depends on a specific type. This approach minimizes errors and makes your code cleaner and easier to read.

---

## Types of Type Guards in TypeScript

There are several ways to implement type guards in TypeScript. Let’s go through the most common ones:

---

### 1. `typeof` Type Guard

The `typeof` operator is a quick and easy way to check for primitive types like `string`, `number`, or `boolean`. This is useful when you need to work with data that could be multiple primitive types.

**Example:**

```typescript
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // TypeScript knows `value` is a string here
  } else {
    return value.toFixed(2); // TypeScript knows `value` is a number here
  }
}

Use Case: Use the typeof guard when you need to handle different types of primitive values in a single function. For instance, formatting a value differently based on whether it's a string or a number.
