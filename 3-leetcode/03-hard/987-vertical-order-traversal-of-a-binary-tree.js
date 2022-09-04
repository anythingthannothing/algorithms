var verticalTraversal = function (root) {
  let answer = [];
  const rc = (node, x, y) => {
    answer.push((x << 20) + (y << 10) + node.val);
    if (node.left) rc(node.left, x - 1, y + 1);
    if (node.right) rc(node.right, x + 1, y + 1);
  };
  rc(root, 1000, 0);
  answer.sort((a, b) => a - b);
  for (let l = (r = 0); r < answer.length; r = ++l) {
    let curr = answer[l] >> 20;
    while (answer[r] >> 20 == curr) r++;
    let group = answer.slice(l, r).map((el) => el & ((1 << 10) - 1));
    answer.splice(l, r - l, group);
  }
  return answer;
};
