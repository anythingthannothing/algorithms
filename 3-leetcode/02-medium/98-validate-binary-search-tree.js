const validate = function (root, low, high) {
  if (!root) return true;
  if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
    return false;
  }
  return (
    validate(root.right, root.val, high) && validate(root.left, low, root.val)
  );
};

function isValidBST(root) {
  return validate(root, null, null);
}

const isValidBST = function (root) {
  let data = [];

  function DFSInOrder(root) {
    if (root.left) DFSInOrder(root.left);
    data.push(root.val);
    if (root.right) DFSInOrder(root.right);
  }

  DFSInOrder(root);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < data[i + 1]) return false;
  }
  return true;
};
