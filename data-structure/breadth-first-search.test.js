import { BinarySearchTree } from "./binary-search-tree";
import { breadthFirstSearch } from "./breadth-first-search";

describe("breadsFirstSearch", () => {
  it("should traverse a tree in a horizontal manner", function () {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(breadthFirstSearch(tree)).toEqual([10, 6, 15, 3, 8, 20]);
  });
});
