import { MaxBinaryHeap } from "./max-binary-heap";

describe("MaxBinaryHeap", () => {
  describe("initialization", () => {
    it("should initialize a heap correctly", function () {
      const heap = new MaxBinaryHeap();
      expect(heap).toBeInstanceOf(MaxBinaryHeap);
      expect(heap.values.length).toEqual(0);
    });
  });

  describe("insert", () => {
    it("should insert item to the heap in the right posision", function () {
      const heap = new MaxBinaryHeap();

      heap.insert(41); // 0
      heap.insert(39); // 1
      heap.insert(33); // 2
      heap.insert(18); // 3
      heap.insert(27); // 4
      heap.insert(12); // 5
      heap.insert(55); // 6
      heap.insert(30); // 7

      expect(heap.values).toEqual([
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

  describe("extractMax", () => {
    it("should extract the root and re order the heap", function () {
      const heap = new MaxBinaryHeap();

      heap.insert(41); // 0
      heap.insert(39); // 1
      heap.insert(33); // 2
      heap.insert(18); // 3
      heap.insert(27); // 4
      heap.insert(12); // 5

      expect(heap.extractMax()).toBe(41);
      expect(heap.values).toEqual([
        39, // 0
        27, // 1
        33, // 2
        18, // 3
        12, // 4
      ]);
    });
  });

  it("should extract the root and empty the heap if only one element exists", function () {
    const heap = new MaxBinaryHeap();

    heap.insert(41); // 0

    expect(heap.extractMax()).toBe(41);
    expect(heap.values).toEqual([]);
  });
});
