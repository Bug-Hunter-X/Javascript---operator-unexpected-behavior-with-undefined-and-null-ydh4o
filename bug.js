function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 2)); // Output: NaN
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, undefined)); //Output: NaN
console.log(foo(1, null)); //Output: 1