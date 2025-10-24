class Stack {
  constructor(max = 5) {
    this._items = [];
    this._max = max;
  }

  push(value) {
    if (this.size() >= this._max) return false;
    this._items.push(value);
    return true;
  }

  pop() {
    return this._items.length === 0 ? undefined : this._items.pop();
  }

  peek() {
    return this._items.length === 0
      ? undefined
      : this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }

  toArray() {
    return this._items.slice();
  }
}
