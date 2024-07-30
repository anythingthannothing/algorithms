// T.C: O(m + n) | S.C: O(1)
const merge = (nums1, m, nums2, n) => {
  let position = m + n - 1,
    i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) nums1[position--] = nums1[i--];
    else nums1[position--] = nums2[j--];
  }
  while (j >= 0) nums1[position--] = nums2[j--];
};
