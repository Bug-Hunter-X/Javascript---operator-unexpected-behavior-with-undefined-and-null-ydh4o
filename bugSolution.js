function foo(a, b) {
  // Handle undefined or null values
  a = a === undefined ? 0 : a;
  b = b === undefined ? 0 : b;
  return a + b;
}

console.log(foo(undefined, 2)); // Output: 2
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(1, null)); // Output: 1