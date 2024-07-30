class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const getMinimumDifference = (root: TreeNode | null): number => {
  let minimum = Number.MAX_SAFE_INTEGER;
  const nums = [];

  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();
    nums.push(cur.val);
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }

  nums.sort((a, b) => a - b);

  const length = nums.length;

  for (let i = 0; i < length - 1; i++) {
    minimum = Math.min(Math.abs(nums[i] - nums[i + 1]), minimum);
  }

  return minimum;
};
