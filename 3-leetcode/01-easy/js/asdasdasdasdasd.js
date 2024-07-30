var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : 2 * n;
};

var longestContinuousSubstring = function (s) {
  let result = 1;
  let len = s.length;
  let start = 0,
    end = 1;

  while (end < len) {
    if (s[end].charCodeAt(0) - s[end - 1].charCodeAt(0) == 1) {
      result = Math.max(result, end - start + 1);
      end++;
    } else start = end++;
  }
  return result;
};

var reverseOddLevels = function (root) {
  let queue = [root];

  let normal = [];

  let level = 0;
  while (queue.length) {
    let temp = [];
    for (let node of queue) {
      if (level % 2 === 1) normal.push(node.val);
      if (node.left) {
        temp.push(node.left);
        temp.push(node.right);
      }
    }
    queue = temp;
    level++;
  }

  queue = [root];

  level = 0;
  while (queue.length) {
    let temp = [];
    for (let node of queue) {
      if (level % 2 === 1) {
        node.val = normal.shift();
      }
      if (node.left) {
        temp.push(node.right);
        temp.push(node.left);
      }
    }
    queue = temp;
    level++;
  }

  return root;
};
