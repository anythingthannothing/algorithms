const minWindow = (s, t) => {
  let ans = "";

  let map = {};
  for (let char of t) map[char] = (map[char] || 0) + 1;
  let count = Object.keys(map).length;

  let l = 0;
  let r = -1;

  while (r < s.length) {
    if (count === 0) {
      if (!ans || r - l + 1 < ans.length) {
        ans = s.slice(l, r + 1);
      }

      if (map[s[l]] !== undefined) {
        map[s[l]]++;
      }
      if (map[s[l]] > 0) {
        count++;
      }
      l++;
    } else {
      r++;
      if (map[s[r]] !== undefined) {
        map[s[r]]--;
      }
      if (map[s[r]] === 0) {
        count--;
      }
    }
  }
  return ans;
};
