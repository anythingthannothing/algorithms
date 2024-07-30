// Using HashMap => T.C: O(n) | S.C: O(n);
let containsDuplicate = (nums) => {
  let numsMap = new Map();
  for (let num of nums) {
    if (!numsMap.get(num)) numsMap.set(num, true);
    else return true;
  }
  return false;
};

// Using Set => T.C: O(n) | S.C: O(n);
// let containsDuplicate = (nums) => {
//   let numsSet = [...new Set(nums)];
//   return numsSet.length === nums.length ? false : true;
// };
