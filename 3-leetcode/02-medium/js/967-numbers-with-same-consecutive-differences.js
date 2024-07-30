const numsSameConsecDiff = function (n, k) {
  let answer = [];

  function DFS(level, num) {
    if (level == 0) return answer.push(num);
    let tailDigit = num % 10;
    let nextDigits = [...new Set([tailDigit + k, tailDigit - k])];

    for (let nextDigit of nextDigits) {
      if (nextDigit >= 0 && nextDigit < 10) {
        let newNum = num * 10 + nextDigit;
        DFS(level - 1, newNum);
      }
    }
  }

  for (let i = 1; i < 10; i++) {
    DFS(n - 1, i);
  }

  return answer;
};
