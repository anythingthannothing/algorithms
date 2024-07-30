const firstUniqChar = (s) => {
  let sMap = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    sMap.set(s[i], sMap.get(s[i]) + 1 || 1);
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (sMap.get(s[i]) === 1) return i;
  }
  return -1;
};
