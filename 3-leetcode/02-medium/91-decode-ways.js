var numDecodings = function (s) {
  let p = 1;
  let pp;
  let n = s.length;

  for (let i = n - 1; i >= 0; i--) {
    let curr = s[i] === "0" ? 0 : p;
    if (i < n - 1 && (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7")))
      curr += pp;
    pp = p;
    p = curr;
  }
  return p;
};
