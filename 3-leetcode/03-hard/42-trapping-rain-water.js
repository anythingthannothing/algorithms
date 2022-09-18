const trap = function (height) {
  let result = 0;
  let leftMax = 0,
    rightMax = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    if (height[left] <= height[right]) {
      let waterTrap = Math.max(0, leftMax - height[left]);
      leftMax = Math.max(leftMax, height[left]);
      result += waterTrap;
      left++;
    } else {
      let waterTrap = Math.max(0, rightMax - height[right]);
      rightMax = Math.max(rightMax, height[right]);
      result += waterTrap;
      right--;
    }
  }

  return result;
};
