class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }
  insert(val) {
    this.val.push(val);

    function bubbleUp(arr) {
      let index = arr.length - 1;
      if (index === 0) return;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (arr[parentIndex] >= arr[index]) break;
        [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
        index = parentIndex;
      }
    }
    bubbleUp(this.val);
  }
  extractMax() {
    let max = this.val[0];
    this.val[0] = this.val.pop();

    this.sinkDown();

    return max;
  }
  sinkDown() {
    let index = 0;
    let len = this.val.length;

    while (index < len) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let swap = false;

      if (leftChildIndex < len) {
        if (this.val[index] < this.val[leftChildIndex]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < len) {
        if (
          (swap === false && this.val[index] < this.val[rightChildIndex]) ||
          (swap !== false &&
            this.val[leftChildIndex] < this.val[rightChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      [this.val[index], this.val[swap]] = [this.val[swap], this.val[index]];
      index = swap;
    }
  }
}

let MBH = new MaxBinaryHeap();
MBH.insert(1);
MBH.insert(2);
MBH.insert(3);
MBH.insert(4);
MBH.insert(5);
MBH.insert(6);
MBH.insert(7);
