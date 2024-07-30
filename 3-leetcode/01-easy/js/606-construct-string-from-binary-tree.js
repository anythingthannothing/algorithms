const tree2str = function (root) {
  let answer = "";

  function DFS(node) {
    if (!node) return;
    answer += node.val;
    if (!node.left && !node.right) return;
    answer += "(";
    DFS(node.left);
    answer += ")";
    if (node.right) {
      answer += "(";
      DFS(node.right);
      answer += ")";
    }
  }

  DFS(root);

  return answer;
};
