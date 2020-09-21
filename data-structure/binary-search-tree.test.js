import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
  describe("initialization", () => {
    it("should be to initialize a BST", function () {
      const tree = new BinarySearchTree();
      expect(tree).toBeInstanceOf(BinarySearchTree);
      expect(tree.root).toBe(null);
    });
  });

  describe("insert", () => {
    it("should be able to insert the root if the BST is empty", function () {
      const tree = new BinarySearchTree();

      tree.insert(1);
      expect(tree.root.val).toBe(1);
      expect(tree.root.left).toBe(null);
      expect(tree.root.right).toBe(null);
    });

    it("should be able to insert new value in the right position", function () {
      const tree = new BinarySearchTree();

      tree.insert(40);
      tree.insert(30);
      tree.insert(50);
      tree.insert(60);
      expect(tree.root.val).toBe(40);
      expect(tree.root.left.val).toBe(30);
      expect(tree.root.left.left).toBe(null);
      expect(tree.root.left.right).toBe(null);
      expect(tree.root.right.val).toBe(50);
      expect(tree.root.right.right.val).toBe(60);
      expect(tree.root.right.left).toBe(null);
      expect(tree.root.right.right.right).toBe(null);
      expect(tree.root.right.right.left).toBe(null);
    });
  });

  describe("find", () => {
    it("should return null if it doesn't find the value", function () {
      const tree = new BinarySearchTree();
      expect(tree.find(40)).toBe(null);
      tree.insert(40);
      expect(tree.find(40)).not.toBe(null);
      expect(tree.find(50)).toBe(null);
    });

    it("should return the node if the value exists", function () {
      const tree = new BinarySearchTree();

      tree.insert(40);
      tree.insert(30);
      tree.insert(50);
      tree.insert(60);
      expect(tree.find(50).val).toBe(50);
      expect(tree.find(50).right.val).toBe(60);
      expect(tree.find(50).left).toBe(null);
    });
  });
});
