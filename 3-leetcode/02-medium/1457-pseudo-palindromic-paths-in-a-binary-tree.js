const pseudoPalindromicPaths = function (root) {
  let answer = 0;
  let visited = new Map();

  DFS(root);
  return answer;

  function isPseudoPalindrome(map) {
    let result = 0;
    for (let [_, value] of map) if (value % 2 === 1) result++;
    return result === 0 || result === 1 ? true : false;
  }

  function DFS(node) {
    visited.set(node.val, visited.get(node.val) + 1 || 1);
    if (node.left) DFS(node.left);
    if (node.right) DFS(node.right);
    if (!node.left && !node.right) {
      if (isPseudoPalindrome(visited)) answer++;
    }
    visited.set(node.val, visited.get(node.val) - 1);
  }
};
