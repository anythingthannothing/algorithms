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
