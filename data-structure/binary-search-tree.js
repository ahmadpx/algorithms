/**
 * @class Binary Search Tree
 * @todo: pass a comparison function to have a dynamic data types
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * insert node to the tree
   * @param {*} val
   * @return {Node|null}
   */
  insert(val) {
    if (!val) return null;

    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return newNode;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return newNode;
        }
        current = current.right;
      } else {
        return current;
      }
    }
  }

  /**
   * find a node on the tree
   * @param {*} val
   * @return {Node|null}
   */
  find(val) {
    if (!val || this.root === null) return null;

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) return null;
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) return null;
        current = current.right;
      } else {
        return current;
      }
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = { BinarySearchTree };
