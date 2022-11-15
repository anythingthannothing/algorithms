const countNodes = function (root) {
  const findHeight = (node) => {
    return node === null ? -1 : 1 + findHeight(node.left);
  };
  let h = findHeight(root);
  return h < 0
    ? 0
    : height(root.right) == h - 1
    ? (1 << h) + countNodes(root.right)
    : (1 << (h - 1)) + countNodes(root.left);
};

// const countNodes = function (root) {
//   let leftDepth = findLeftDepth(root);
//   let rightDepth = findRightDepth(root);
//   if (leftDepth == rightDepth) return (1 << leftDepth) - 1;
//   else return 1 + countNodes(root.left) + countNodes(root.right);
//   function findRightDepth(root) {
//     let dep = 0;
//     while (root != null) {
//       root = root.right;
//       dep++;
//     }
//     return dep;
//   }
//   function findLeftDepth(root) {
//     let dep = 0;
//     while (root != null) {
//       root = root.left;
//       dep++;
//     }
//     return dep;
//   }
// };
