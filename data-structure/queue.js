const SLL = require("./singly-linked-list").SinglyLinkedList;

class Queue {
  constructor() {
    this.queue = new SLL();
    this.size = this.queue.length;
  }

  /**
   * push new item to the queue
   * @param {*} val
   * @return {number}
   */
  enqueue(val) {
    this.queue.push(val);
    this.size = this.queue.length;
    return this.queue.length;
  }

  /**
   * remove the first item added to the queue
   * @return {Item|void}
   */
  dequeue() {
    const popped = this.queue.shift();
    this.size = this.queue.length;
    return popped ? popped.val : null;
  }
}

module.exports = { Queue };
