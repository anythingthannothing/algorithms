// Solution with Two-Pointers => T.C: O(n^2) | S.C(1)
const threeSumClosest = function (nums, target) {
  let answer = Infinity;
  let answerDist = Infinity - target;
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let sum;
  let dist;
  let start;
  let end;

  for (let i = 0; i < n - 2; i++) {
    start = i + 1;
    end = n - 1;
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end];
      dist = Math.abs(target - sum);
      if (answerDist > dist) {
        answer = sum;
        answerDist = dist;
      }
      if (sum < target) start++;
      else if (sum > target) end--;
      else break;
    }
  }
  return answer;
};

// Solution with Brute Force => T.C: O(n^3) | S.C(1)
// const threeSumClosest = function (nums, target) {
//   let answer = Infinity;
//   let answerDist = Infinity - target;
//   nums.sort((a, b) => a - b);
//   let n = nums.length;
//   let sum;
//   let dist;

//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         sum = nums[i] + nums[j] + nums[k];
//         dist = Math.abs(target - sum);
//         if (answerDist > dist) {
//           answer = sum;
//           answerDist = dist;
//         }
//         if (sum >= target && sum >= answer) break;
//       }
//     }
//   }
//   return answer;
// };
