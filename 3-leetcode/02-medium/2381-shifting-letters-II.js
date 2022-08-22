const shiftingLetters = function (s, shifts) {
  s = s.split("").map((v) => v.charCodeAt());

  while (shifts.length) {
    let [start, end, dir] = shifts.shift();
    if (dir === 1) {
      for (let i = start; i <= end; i++) {
        s[i]++;
      }
    } else {
      for (let i = start; i <= end; i++) {
        s[i]--;
      }
    }
  }
  s = s.map((v) => {
    if (v < 97) {
      while (v < 97) v += 26;
      return String.fromCharCode(v);
    }
    if (v > 122) {
      while (v > 122) v -= 26;
      return String.fromCharCode(v);
    }
    return String.fromCharCode(v);
  });
  return s.join("");
};
