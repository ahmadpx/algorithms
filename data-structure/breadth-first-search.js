import { Queue } from "./queue";

/**
 * traverse a binary search tree using breadth first search
 * @param {BinarySearchTree} tree
 * @return {Array} visited
 */
export function breadthFirstSearch(tree) {
  const queue = new Queue();
  const visited = [];
  let current;

  queue.enqueue(tree.root);

  while (queue.size) {
    current = queue.dequeue();

    if (current.left !== null) {
      queue.enqueue(current.left);
    }

    if (current.right !== null) {
      queue.enqueue(current.right);
    }

    visited.push(current.val);
  }

  return visited;
}
