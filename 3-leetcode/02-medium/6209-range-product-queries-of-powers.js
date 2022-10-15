const productQueries = function (n, queries) {
  const MOD = 1e9 + 7;
  let target = n.toString(2);
  let len = target.length;
  let powers = [];
  for (let i = len - 1; i >= 0; i--) {
    if (target[i] === "1") powers.push(Math.pow(2, len - i - 1));
  }
  let answer = [];
  for (let query of queries) {
    answer.push(
      powers.slice(query[0], query[1] + 1).reduce((acc, v) => acc * v, 1) % MOD
    );
  }
  return answer;
};
