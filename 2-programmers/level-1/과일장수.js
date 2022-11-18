function solution(k, m, score) {
  let n = score.length;
  if (n < m) return 0;

  let result = 0;
  let pos = m - 1;
  score.sort((a, b) => b - a);

  while (pos < n) {
    result += score[pos] * m;
    pos += m;
  }
  return result;
}
