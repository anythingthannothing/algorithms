const commonFactors = function (a, b) {
  let answer = 0;
  let small = Math.min(a, b);

  for (let i = 1; i <= small; i++) {
    if (a % i === 0 && b % i === 0) answer++;
  }

  return answer;
};
