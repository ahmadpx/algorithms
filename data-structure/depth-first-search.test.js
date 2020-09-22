import { BinarySearchTree } from "./binary-search-tree";
import { depthFirstSearch } from "./depth-first-search";

describe("depthFirstSearch", () => {
  it("should traverse a tree in a horizontal manner", function () {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    const results = depthFirstSearch(tree);
    console.log(results);
    expect(results).toEqual([10, 6, 3, 8, 15, 20]);
  });
});
