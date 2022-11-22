class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyCircularQueue {
  constructor(n) {
    this.head = null;
    this.tail = null;
    this.maxSize = n;
    this.size = 0;
  }

  enQueue(val) {
    if (this.isFull()) return false;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
    }
    this.size--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.head.val;
  }

  Rear() {
    return this.isEmpty() ? -1 : this.tail.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.maxSize;
  }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
console.log(myCircularQueue.deQueue()); // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear()); // return 4
