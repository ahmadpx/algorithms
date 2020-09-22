import { Stack } from "./stack";

/**
 * traverse a binary search tree using depth first search
 * @param {BinarySearchTree} tree
 * @return {Array} visited
 */
export function depthFirstSearch(tree) {
  const visited = [];

  function traverse(node) {
    if (node === null) return;
    visited.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree.root);

  return visited;
}
