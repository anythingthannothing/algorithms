const addOneRow = function (root, val, depth) {
  if (depth === 1) {
    let newNode = new TreeNode(val, root, (right = null));
    return newNode;
  }
  let queue = [root];
  let cur = 1;
  while (cur !== depth - 1) {
    cur++;
    let temp = [];
    while (queue.length) {
      let now = queue.pop();
      if (now.left) temp.push(now.left);
      if (now.right) temp.push(now.right);
    }
    queue = temp;
  }
  while (queue.length) {
    let now = queue.pop();
    let newLeftNode = new TreeNode(val, now.left, null);
    let newRightNode = new TreeNode(val, null, now.right);
    now.left = newLeftNode;
    now.right = newRightNode;
  }
  return root;
};
