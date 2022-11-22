class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = curr.prev;
      this.tail.next = null;
      curr.prev = null;
    }
    this.length--;
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    let curr = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = curr.next;
      this.head.prev = null;
      curr.next = null;
    }
    this.length--;
    return curr;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter;
    let curr;
    if (index < this.length / 2) {
      counter = 0;
      curr = this.head;
      while (counter !== index) {
        counter++;
        curr = curr.next;
      }
    } else {
      counter = this.length - 1;
      curr = this.tail;
      while (counter !== index) {
        counter--;
        curr = curr.prev;
      }
    }
    return curr;
  }
  getMid() {
    return this.get(Math.floor(this.length / 2));
  }
  set(index, val) {
    let curr = this.get(index);
    if (!curr) return false;
    curr.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let curr = this.get(index);
    let prev = curr.prev;
    newNode.next = curr;
    newNode.prev = prev;
    prev.next = curr;
    curr.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (!this.head || index < 0 || index >= this.length) return null;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    let curr = this.get(index);
    let prev = curr.prev;
    let next = curr.next;
    prev.next = next;
    next.prev = prev;
    curr.prve = null;
    curr.next = null;
    this.length--;
    return curr;
  }
}

let DLL = new DoublyLinkedList();
