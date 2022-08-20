const minimumRecolors = function (blocks, k) {
  let len = blocks.length;
  let answer = Infinity;

  for (let i = 0; i < len - k + 1; i++) {
    let countW = 0,
      countB = 0;

    for (let j = i; j < i + k; j++) {
      if (blocks[j] === "W") countW++;
      else countB++;
    }
    answer = Math.min(answer, countW);
  }
  return answer;
};
