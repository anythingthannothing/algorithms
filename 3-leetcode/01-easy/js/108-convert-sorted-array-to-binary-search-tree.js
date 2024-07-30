const sortedArrayToBST = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(left + right / 2);
  let head = new TreeNode(
    nums[mid],
    recursive(nums, left, mid - 1),
    recursive(nums, mid + 1, right)
  );

  function recursive(arr, left = 0, right = nums.length - 1) {
    // base case
    if (left > right) return;

    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(
      nums[mid],
      recursive(nums, left, mid - 1),
      recursive(nums, mid + 1, right)
    );

    return node;
  }
  return head;
};
