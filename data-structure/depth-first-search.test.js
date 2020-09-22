import { BinarySearchTree } from "./binary-search-tree";
import { preOrderDFS, postOrderDFS } from "./depth-first-search";

describe("preOrderDFS", () => {
  it("should traverse a tree in a vertical manner from top to bottom, left to right", function () {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    const results = preOrderDFS(tree);
    expect(results).toEqual([10, 6, 3, 8, 15, 20]);
  });
});

describe("postOrderDFS", () => {
  it("should traverse a tree in a vertical manner from bottom to top, left to right", function () {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    const results = postOrderDFS(tree);
    expect(results).toEqual([3, 8, 6, 20, 15, 10]);
  });
});
