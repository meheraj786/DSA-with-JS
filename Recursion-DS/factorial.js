function factorial(item) {
  if (item == 0) {
    return 1;
  }
  return item * factorial(item - 1);
}

console.log(factorial(4));

