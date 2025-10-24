function test(x) {
  console.log(x); // --head
  if (x > 0) {
    test(x - 1);
  }
  console.log(x); // --tail
}


test(5)