function calculateOperations(n) {
  const f = 5 * n * n + 6 * n + 12;
  return f;
}

// Example:
console.log("f(10) =", calculateOperations(10));  // 572
console.log("f(100) =", calculateOperations(100)); // 50612
console.log("f(1000) =", calculateOperations(1000)); // 5006012