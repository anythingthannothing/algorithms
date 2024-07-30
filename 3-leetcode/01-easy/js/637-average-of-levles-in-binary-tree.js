const averageOfLevels = function (root) {
  let answer = [];

  if (root === null) return answer;

  let queue = [root];

  while (queue.length) {
    let sum = 0;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      sum += current.val;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    answer.push(sum / size);
    sum = 0;
  }

  return answer;
};
