class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;
      else if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return curr;
      else if (val < curr.val) curr = curr.left;
      else curr = curr.right;
    }
    return false;
  }
  BFS() {
    let queue = [];
    let result = [];
    let curr = this.root;
    queue.push(curr);

    while (queue.length) {
      curr = queue.shift();
      result.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return result;
  }
  DFSPreOrder() {
    let result = [];
    let curr = this.root;

    function traverse(node) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return result;
  }
  DFSInOrder() {
    let result = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(val);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return result;
  }
  DFSInOrderMorrisTraversal() {
    let curr = this.root;
    let subRoot;
    let temp;
    let result = [];

    while (curr) {
      if (!curr.left) {
        result.push(curr.val);
        curr = curr.right;
      } else {
        temp = curr.left;
        prev = temp;
        while (prev.right) {
          prev = prev.right;
        }
        prev.right = curr;
        curr.left = null;
        curr = temp;
      }
    }
    return result;
  }
  DFSPostOrder() {
    let result = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(val);
    }
    traverse(curr);
    return result;
  }
}
