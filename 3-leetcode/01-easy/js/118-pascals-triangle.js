const generate = (numRows) => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let answer = [[1], [1, 1]];
  for (let i = 1; i < numRows - 1; i++) {
    let temp = [1, ...Array(i).fill(0), 1];
    for (let j = 1; j < i + 1; j++) {
      temp[j] = answer[i][j - 1] + answer[i][j];
    }
    answer.push(temp);
  }
  return answer;
};
