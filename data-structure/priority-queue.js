/**
 * @class Priority queue node
 */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

/**
 * @class priority queue
 * implementation using binary heaps
 */
export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * enqueue new item to the priority queue
   * @param {*} val
   * @param {Number} priority
   * @return {Array} priority queue values
   */
  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
    return this.values;
  }

  /**
   * dequeue the highest priority item in the queue
   * @return {*}
   */
  dequeue() {
    if (this.values.length === 1) return this.values.pop();
    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.bubbleDown();
    return max;
  }

  /**
   * bubble up the newly added item to the root of the heap
   */
  bubbleUp() {
    const node = this.values[this.values.length - 1];
    if (this.values.length === 1) return;

    let currentIndex = this.values.length - 1;
    let parentIndex = getParentIndex(currentIndex);

    while (parentIndex !== null) {
      if (node.priority < this.values[parentIndex]?.priority) break;
      this.values = swap(this.values, parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = getParentIndex(currentIndex);
    }
  }

  /**
   * bubble down the root of the heap to his right position in the tree
   */
  bubbleDown() {
    let parentIndex = 0;
    let biggerChildIndex = getBiggerChildIndex(this.values, parentIndex);

    while (
      this.values[parentIndex]?.priority <
      this.values[biggerChildIndex]?.priority
    ) {
      this.values = swap(this.values, parentIndex, biggerChildIndex);
      parentIndex = biggerChildIndex;
      biggerChildIndex = getBiggerChildIndex(this.values, parentIndex);
    }
  }
}

/**
 * get parent index
 * @param {Number} childIndex
 * @return {Number|null}
 */
function getParentIndex(childIndex) {
  if (childIndex === 0) return null;
  return Math.floor((childIndex - 1) / 2);
}

/**
 * get bigger child index
 * @param {Array} heap
 * @param {Number} parentIndex
 * @return {number}
 */
function getBiggerChildIndex(heap, parentIndex) {
  const [idx1, idx2] = [2 * parentIndex + 1, 2 * parentIndex + 2];
  return heap[idx1]?.priority > heap[idx2]?.priority ? idx1 : idx2;
}

/**
 * swap two item in an array
 * @param {Array} arr
 * @param {Number} idx1
 * @param {Number} idx2
 * @return {Array}
 */
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}
