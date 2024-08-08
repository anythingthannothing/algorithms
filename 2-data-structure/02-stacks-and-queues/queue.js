class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return undefined;
    let curr = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = curr.next;
    curr.next = null;
    this.size--;
    return curr;
  }
  peek() {
    if (!this.first) return undefined;
    return this.first;
  }
}
