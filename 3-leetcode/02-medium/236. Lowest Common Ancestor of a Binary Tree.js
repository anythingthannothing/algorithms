let lowestCommonAncestor = function (root, p, q) {
  let map = new Map();
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let temp = stack.pop();
    if (temp.left) {
      map.set(temp.left, temp);
      stack.push(temp.left);
    }
    if (temp.right) {
      map.set(temp.right, temp);
      stack.push(temp.right);
    }
  }

  let set = new Set();
  set.add(p);
  while (p !== root) {
    p = map.get(p);
    set.add(p);
  }

  while (!set.has(q)) {
    q = map.get(q);
  }
  return q;
};
