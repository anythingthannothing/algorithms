const subarrayGCD = function (nums, k) {
  let answer = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let a = nums[i];
    if (nums[i] % k) continue;
    if (nums[i] === k) answer++;
    for (let j = i + 1; j < n; j++) {
      let b = nums[j];
      if (nums[j] % k) break;
      let gcd = gcd_two_numbers(a, b);
      if (gcd < k) break;
      if (gcd === k) answer++;
      a = gcd;
    }
  }

  return answer;
};

function gcd_two_numbers(x, y) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}
