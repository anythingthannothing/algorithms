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
