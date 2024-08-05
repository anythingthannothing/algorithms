const rangeSum = (nums: number[], n: number, left: number, right: number): number => {
  const length = nums.length;
  const sums = [];
  const mod = 1e9 + 7;
  
  for (let i = 0; i < length; i++) {
    let sum = 0;
    
    for (let j = i; j < length; j++) {
      sum += nums[j];
      sums.push(sum);
    }
  }
  
  sums.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  
  let result = 0;
  
  for (let i = left - 1; i < right; i++) {
    result = (result + sums[i]) % mod;
  }
  
  return result;
};