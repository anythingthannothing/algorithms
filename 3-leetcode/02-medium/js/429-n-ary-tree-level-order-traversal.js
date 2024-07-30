const levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let temp = [];
    let nextQ = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      temp.push(curr.val);
      nextQ.push(...curr.children);
    }
    result.push(temp);
    queue.push(...nextQ);
  }
  return result;
};
