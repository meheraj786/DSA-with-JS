let stack = [];
let currentSize = stack.length;
let max = 5;

function push(data) {
  if (currentSize >= max) {
    data[currentSize] = data;
    currentSize++;
  }
}
function pop() {
  if (currentSize > 0) currentSize--;
  stack.length = currentSize;
}
