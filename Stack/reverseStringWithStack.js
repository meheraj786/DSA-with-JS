//hello --> olleh

let stack = [];
let currentSize = 0;
let max = 5;

function push(data) {
  if (currentSize >= max) {
    return false;
  }
  stack[currentSize] = data;
  currentSize++;
  return true;
}

function pop() {
  if (currentSize === 0) return undefined;
  currentSize--;
  const value = stack[currentSize];
  stack.length = currentSize;
  return value;
}

function peek() {
  return currentSize > 0 ? stack[currentSize - 1] : undefined;
}

function isEmpty() {
  return currentSize === 0;
}

function size() {
  return currentSize;
}

function reverseString(str) {
  stack = [];
  currentSize = 0;
  for (const ch of str) push(ch);
  let out = '';
  while (!isEmpty()) out += pop();
  return out;
}

console.log(reverseString('hello')); // olleh

