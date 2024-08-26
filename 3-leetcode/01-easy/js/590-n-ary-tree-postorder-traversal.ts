class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

const postorder = (root: _Node | null): number[] => {
  const result = [];

  traverse(root, result);

  return result;
};

function traverse(node: _Node, result: number[]) {
  if (node == null) {
    return;
  }

  for (let child of node.children) {
    traverse(child, result);
  }

  result.push(node.val);
}
