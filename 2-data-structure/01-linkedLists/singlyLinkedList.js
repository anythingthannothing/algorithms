class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.head,
      pre;
    while (curr.next) {
      pre = curr;
      curr = curr.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    let curr = this.head;
    this.head = curr.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return curr;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return curr;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0,
      curr = this.head;
    while (counter !== index) {
      counter++;
      curr = curr.next;
    }
    return curr;
  }
  getMid() {
    if (!this.length) return undefined;
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      index++;
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  set(index, value) {
    let curr = this.get(index);
    if (curr) {
      curr.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) !!this.pop();

    let prev = this.get(index - 1),
      curr = prev.next;
    prev.next = curr.next;
    curr.next = null;
    this.length--;
    return curr;
  }
  reverse() {
    if (!this.head) return this;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let next,
      prev = null;
    for (let i = 0, len = this.length; i < len; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
