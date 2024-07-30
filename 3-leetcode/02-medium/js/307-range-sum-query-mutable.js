let len;
let block;

class NumArray {
  constructor(nums) {
    this.nums = nums;
    len = Math.ceil(nums.length / Math.sqrt(nums.length));
    block = Array.from({ length: len }, (v) => 0);
    for (let i = 0; i < nums.length; i++) {
      block[Math.floor(i / len)] += nums[i];
    }
  }

  sumRange(left, right) {
    let sum = 0;
    let startBlock = Math.floor(left / len);
    let endBlock = Math.floor(right / len);
    if (startBlock === endBlock) {
      for (let i = left; i <= right; i++) {
        sum += this.nums[i];
      }
    } else {
      for (let i = left; i <= (startBlock + 1) * len - 1; i++) {
        sum += this.nums[i];
      }
      for (let i = startBlock + 1; i <= endBlock - 1; i++) {
        sum += block[i];
      }
      for (let i = endBlock * len; i <= right; i++) {
        sum += this.nums[i];
      }
    }
    return sum;
  }

  update(index, val) {
    let blockIndex = Math.floor(index / len);
    block[blockIndex] = block[blockIndex] - this.nums[index] + val;
    this.nums[index] = val;
  }
}
