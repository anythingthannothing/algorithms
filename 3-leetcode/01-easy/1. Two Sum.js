// Solution of O(n) Using HashMap
const twoSum = (nums, target) => {
    let numsMap = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        numsMap.set(target - nums[i], i);
    }
    for (let i = 0; i < len; i++) {
        let counterIndex = numsMap.get(nums[i]);
        if (numsMap.has(nums[i]) && i !== counterIndex) return [i, counterIndex];
    }
}



// Solution of O(nlogn) Using Sort
const twoSum = (nums, target) => {
    let newNums = nums.slice().sort((a, b) => a - b);
    let len = nums.length;
    let start = 0,
        end = len - 1;
    
    while (true) {
        let sum = newNums[start] + newNums[end];
        if (sum === target) return [nums.indexOf(newNums[start]), nums.lastIndexOf(newNums[end])];
        if (sum > target) end--;
        else if (sum < target) start++;
    }
}



// Solution of O(n^2) Using Brute Force
const twoSum = (nums, target) => {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};