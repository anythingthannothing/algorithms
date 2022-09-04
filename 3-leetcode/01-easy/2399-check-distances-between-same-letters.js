const checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (distance[s[i].charCodeAt() - 97] !== j - i - 1) return false;
        break;
      }
    }
  }
  return true;
};
