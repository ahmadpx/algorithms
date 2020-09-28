/**
 * pre order traverse a binary search tree using depth first search
 * use case: can be used to save the tree in a list and you can regenerate the tree from the same list again
 * @param {BinarySearchTree} tree
 * @return {Array} visited
 */
export function preOrderDFS(tree) {
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

/**
 * post order traverse a binary search tree using depth first search
 * @param {BinarySearchTree} tree
 * @return {Array} visited
 */
export function postOrderDFS(tree) {
  const visited = [];

  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    visited.push(node.val);
  }

  traverse(tree.root);

  return visited;
}

/**
 * in order traverse a binary search tree using depth first search
 * use case: the returned list will be in order if the sorting is important
 * @param {BinarySearchTree} tree
 * @return {Array} visited
 */
export function inOrderDFS(tree) {
  const visited = [];

  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    visited.push(node.val);
    traverse(node.right);
  }

  traverse(tree.root);

  return visited;
}
