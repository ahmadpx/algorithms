import { PriorityQueue } from "./priority-queue";

describe("PriorityQueue", () => {
  describe("initialization", () => {
    it("should initialize a heap correctly", function () {
      const heap = new PriorityQueue();
      expect(heap).toBeInstanceOf(PriorityQueue);
      expect(heap.values.length).toEqual(0);
    });
  });

  describe("enqueue", () => {
    it("should enqueue item to the priority queue in the right position", function () {
      const heap = new PriorityQueue();

      heap.enqueue("value", 41); // 0
      heap.enqueue("value", 39); // 1
      heap.enqueue("value", 33); // 2
      heap.enqueue("value", 18); // 3
      heap.enqueue("value", 27); // 4
      heap.enqueue("value", 12); // 5
      heap.enqueue("value", 55); // 6
      heap.enqueue("value", 30); // 7

      expect(heap.values.map((node) => node.priority)).toEqual([
        55, // 0
        39, // 1
        41, // 2
        30, // 3
        27, // 4
        12, // 5
        33, // 6
        18, // 7
      ]);
    });
  });

  describe("dequeue", () => {
    it("should dequeue the higher priority item", function () {
      const heap = new PriorityQueue();

      heap.enqueue("value", 41); // 0
      heap.enqueue("value", 39); // 1
      heap.enqueue("value", 33); // 2
      heap.enqueue("value", 18); // 3
      heap.enqueue("value", 27); // 4
      heap.enqueue("value", 12); // 5

      expect(heap.dequeue().priority).toBe(41);
      expect(heap.values.map((node) => node.priority)).toEqual([
        39, // 0
        27, // 1
        33, // 2
        18, // 3
        12, // 4
      ]);
    });
  });

  it("should dequeue the root and empty the queue if only one element exists", function () {
    const heap = new PriorityQueue();

    heap.enqueue("value", 41); // 0

    expect(heap.dequeue().priority).toBe(41);
    expect(heap.values).toEqual([]);
  });
});
