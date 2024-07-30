const bagOfTokensScore = function (tokens, power) {
  let scores = 0;
  let s = 0,
    e = tokens.length - 1;
  tokens.sort((a, b) => a - b);
  if (e + 1 === 0 || power < tokens[0]) return 0;

  while (s <= e) {
    if (power >= tokens[s]) {
      scores++;
      power -= tokens[s++];
    } else {
      if (e - s >= 1) {
        power += tokens[e--];
        scores--;
      } else break;
    }
  }
  return scores;
};
