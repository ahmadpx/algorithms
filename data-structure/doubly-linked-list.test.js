import { DoublyLinkedList } from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  describe("new instance", () => {
    it("should be able to instantiate a new singlyLinkedList", function () {
      const list = new DoublyLinkedList();
      expect(list).toBeInstanceOf(DoublyLinkedList);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe("push", () => {
    it("should push to new list", function () {
      const list = new DoublyLinkedList();

      list.push(5);

      expect(list.head.val).toBe(5);
      expect(list.head.next).toBe(null);
      expect(list.head.prev).toBe(null);
      expect(list.tail.val).toBe(5);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev).toBe(null);
      expect(list.length).toBe(1);
    });

    it("should push to a list with length", function () {
      const list = new DoublyLinkedList();

      list.push(5);
      list.push(4);

      expect(list.head.val).toBe(5);
      expect(list.head.next).toEqual(list.tail);
      expect(list.head.prev).toEqual(null);
      expect(list.tail.val).toBe(4);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev).toBe(list.head);
      expect(list.length).toBe(2);
    });
  });

  describe("pop", () => {
    it("should pop the last item of the list", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.pop().val).toBe(3);
      expect(list.head.val).toBe(1);
      expect(list.head.next).toBe(list.tail);
      expect(list.tail.val).toBe(2);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev).toBe(list.head);
      expect(list.length).toBe(2);
    });

    it("should empty the list if the list is only one item", function () {
      const list = new DoublyLinkedList();

      list.push(1);

      expect(list.pop().val).toBe(1);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should return undefined if nothing in the list", function () {
      const list = new DoublyLinkedList();

      expect(list.pop()).toBeUndefined();
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe("shift", () => {
    it("should remove the first element and return it", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.shift().val).toBe(1);
      expect(list.head.val).toBe(2);
      expect(list.head.next).toBe(list.tail);
      expect(list.head.prev).toBe(null);
      expect(list.tail.val).toBe(3);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(2);
    });

    it("should empty the list if it's only one element", function () {
      const list = new DoublyLinkedList();

      list.push(1);

      expect(list.shift().val).toBe(1);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should adjust the tail if the list is 2 elements", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      expect(list.shift().val).toBe(1);
      expect(list.head.val).toBe(2);
      expect(list.tail.val).toBe(2);
      expect(list.length).toBe(1);
    });
  });

  describe("unshift", () => {
    it("should add item in the beginning of the list (at head)", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      list.unshift(4);

      expect(list.head.val).toBe(4);
      expect(list.head.next.val).toBe(1);
      expect(list.tail.val).toBe(3);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(4);
    });

    it("should add item in an empty list", function () {
      const list = new DoublyLinkedList();

      list.unshift(4);

      expect(list.head.val).toBe(4);
      expect(list.head.next).toBe(null);
      expect(list.tail.val).toBe(4);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(1);
    });

    it("should add item in a list with one item only", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.unshift(4);

      expect(list.head.val).toBe(4);
      expect(list.head.next).toEqual(list.tail);
      expect(list.tail.val).toBe(1);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(2);
    });
  });

  describe("get", () => {
    it("should return item with a specific index", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.get(1).val).toBe(2);
      expect(list.get(1).next.val).toBe(3);
      expect(list.length).toBe(3);
    });

    it("should return undefined if the item doesn't exist", function () {
      const list = new DoublyLinkedList();

      expect(list.get(0)).toBeUndefined();

      list.push(1);
      list.push(2);

      expect(list.get(2)).toBeUndefined();
    });
  });

  describe("set", () => {
    it("it should set item with a specific value and return it", () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.set(0, 6).val).toBe(6);
      expect(list.head.val).toBe(6);

      expect(list.set(2, 8).val).toBe(8);
      expect(list.tail.val).toBe(8);

      expect(list.set(1, 7).val).toBe(7);

      expect(list.length).toBe(3);
    });

    it("it should return undefined if the item doesn't exist", () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.set(-1, 6)).toBeUndefined();
      expect(list.set(3, 8)).toBeUndefined();

      expect(list.length).toBe(3);
    });
  });

  describe("insert", () => {
    it("should be able to insert at head", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.insert(0, 5).val).toBe(5);
      expect(list.head.val).toBe(5);
      expect(list.head.next.val).toBe(1);
      expect(list.length).toBe(4);
    });

    it("should be able to insert at tail", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.insert(3, 5).val).toBe(5);
      expect(list.tail.val).toBe(5);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(4);
    });

    it("should insert in the middle", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.insert(1, 5).val).toBe(5);
      expect(list.head.next.val).toBe(5);
      expect(list.length).toBe(4);

      expect(list.insert(1, 6).next.val).toBe(5);
    });

    it("should return undefined and do nothing if the index doesn't exist", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.insert(5, 5)).toBeUndefined();
      expect(list.length).toBe(3);
    });
  });

  describe("remove", () => {
    it("should empty the list if it has only one element", function () {
      const list = new DoublyLinkedList();

      list.push(1);

      expect(list.remove(0).val).toBe(1);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    it("should let the head and tail to be the same if the list have only two items and one removed", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      expect(list.remove(1).val).toBe(2);
      expect(list.head).toEqual(list.tail);
      expect(list.tail.next).toBe(null);
      expect(list.length).toBe(1);
    });

    it("should be able to remove an item at specific index", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.remove(1).val).toBe(2);
      expect(list.head.val).toBe(1);
      expect(list.head.next).toEqual(list.tail);
      expect(list.tail.val).toEqual(3);
      expect(list.tail.next).toEqual(null);
      expect(list.length).toBe(2);
    });

    it("should return undefined if the index doesn't exist", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.remove(-1)).toBeUndefined();
      expect(list.remove(5)).toBeUndefined();
      expect(list.length).toBe(3);
    });
  });

  describe("reverse", () => {
    it("should reverse the list in place", function () {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
      list.push(7);

      list.reverse();

      expect(list.head.val).toBe(7);
      expect(list.head.next.val).toBe(6);
      expect(list.head.next.next.val).toBe(5);
      expect(list.head.next.next.next.val).toEqual(4);
      expect(list.head.next.next.next.next.val).toEqual(3);
      expect(list.head.next.next.next.next.next.val).toEqual(2);
      expect(list.head.next.next.next.next.next.next).toEqual(list.tail);
      expect(list.tail.val).toBe(1);
      expect(list.tail.next).toBe(null);
    });
  });
});
