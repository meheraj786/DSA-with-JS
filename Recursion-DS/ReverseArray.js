function re(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  re(arr, start + 1, end - 1);
}

let array = [1, 2, 3, 4, 2, 5, 7, 3];

re(array);
console.log(array);

