import { Queue } from "./queue";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Queue", () => {
  describe("instantiation", () => {
    it("should create a new array", function () {
      const queue = new Queue();
      expect(queue.queue).toBeInstanceOf(SinglyLinkedList);
      expect(queue).toBeInstanceOf(Queue);
      expect(queue.size).toBe(0);
    });
  });

  describe("enqueue", () => {
    it("should be able to add a new item to the queue", function () {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.enqueue(4)).toBe(4);
      expect(queue.size).toBe(4);
    });
  });

  describe("dequeue", () => {
    it("should be able to remove the first item added", function () {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(1);
      expect(queue.size).toBe(2);
    });

    it("should return null if there is nothing to dequeue", function () {
      const queue = new Queue();

      expect(queue.dequeue()).toBe(null);
      expect(queue.size).toBe(0);
    });
  });
});
