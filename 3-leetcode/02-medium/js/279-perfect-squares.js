const numSquares = (n) => {
  let squares = [];
  let dp = Array.from({ length: n + 1 }, (_) => 0);

  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
    dp[i * i] = 1;
  }

  if (squares[squares.length - 1] == n) return 1;

  let queue = [];
  for (let square of squares) queue.push(square);

  let answer = 1;
  while (queue.length) {
    answer++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      for (let square of squares) {
        if (curr + square === n) return answer;
        else if (curr + square < n && dp[curr + square] === 0) {
          dp[curr + square] = answer;
          queue.push(curr + square);
        } else if (curr + square > n) break;
      }
    }
  }
};
