class MyCircularQueue {
  constructor(n) {
    this.data = Array.from({ length: n });
    this.maxSize = n;
    this.head = 0;
    this.tail = -1;
  }

  enQueue(val) {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.maxSize;
    this.data[this.tail] = val;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = -1;
    } else this.head = (this.head + 1) % this.maxSize;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.data[this.head];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.data[this.tail];
  }

  isEmpty() {
    return this.tail === -1;
  }

  isFull() {
    return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head;
  }
}
