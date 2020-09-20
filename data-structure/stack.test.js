import { Stack } from "./stack";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Stack", () => {
  describe("instantiation", () => {
    it("should create a new array", function () {
      const stack = new Stack();
      expect(stack.stack).toBeInstanceOf(SinglyLinkedList);
      expect(stack).toBeInstanceOf(Stack);
      expect(stack.size).toBe(0);
    });
  });

  describe("push", () => {
    it("should be able to add a new item to the stack", function () {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.push(4)).toBe(4);
      expect(stack.size).toBe(4);
    });
  });

  describe("pop", () => {
    it("should be able to pop the last item in the stack", function () {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.size).toBe(2);
    });

    it("should return null if there is nothing to pop", function () {
      const stack = new Stack();

      expect(stack.pop()).toBe(null);
      expect(stack.size).toBe(0);
    });
  });
});
