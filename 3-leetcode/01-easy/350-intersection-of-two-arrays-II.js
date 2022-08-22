// HashMap => T.C: O(n + k) | S.C: O(n);
const intersect = (nums1, nums2) => {
  let answer = [];
  let map = new Map();
  for (let i = 0, len = nums1.length; i < len; i++) {
    map.set(nums1[i], map.get(nums1[i]) + 1 || 1);
  }

  for (let num of nums2) {
    if (map.get(num) > 0) {
      answer.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return answer;
};

// Brute Force => T.C: O(n^) | S.C: O(1)
//   const intersect = (nums1, nums2) => {
//     let answer = [];
//     for (let i = 0, len = nums1.length; i < len; i++) {
//       for (let j = 0; j < nums2.length; j++) {
//         if (nums1[i] === nums2[j]) {
//           answer.push(nums1[i]);
//           nums2.splice(j, 1);
//           break;
//         }
//       }
//     }
//     return answer;
//   };
