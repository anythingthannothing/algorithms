class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.val = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.val.push(newNode);

    this.bubbleUp(priority);

    return newNode;
  }
  bubbleUp(priority) {
    let index = this.val.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.val[parentIndex].priority <= priority) break;
      [this.val[parentIndex], this.val[index]] = [
        this.val[index],
        this.val[parentIndex],
      ];
      index = parentIndex;
    }
  }
  dequeue() {
    const MIN = this.val[0];
    const END = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = END;
      this.sinkDown();
    }
    return MIN;
  }
  sinkDown() {
    let index = 0;
    const len = this.val.length;
    const element = this.val[0];
    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < len) {
        leftChild = this.val[leftChildIndex].priority;
        if (leftChild < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < len) {
        rightChild = this.val[rightChildIndex].priority;
        if (
          (rightChild < element.priority && swap === null) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.val[index] = this.val[swap];
      this.val[swap] = element;
      index = swap;
    }
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("gunshot", 0);
priorityQueue.enqueue("flu", 2);
priorityQueue.enqueue("headache", 4);
priorityQueue.enqueue("illness", 3);
priorityQueue.enqueue("caraccident", 1);
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();

console.log(priorityQueue);
