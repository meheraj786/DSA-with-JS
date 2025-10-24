let q = [];
let currentSize = q.length;
let maxSize = 5;

function enQ(item) {
  if (currentSize <= max) {
    q[currentSize] = item;
    currentSize++;
  }
}

function dQ() {
  for (let i = 0; i < q.length; i++) {
    q[i] = q[i + 1];
    currentSize--;
    q.length = currentSize;
  }
}

function front() {
  if (currentSize > 0) {
    q[0];
  }
}
function rear() {
  q[currentSize - 1];
}
