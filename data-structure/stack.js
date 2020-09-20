const SLL = require("./singly-linked-list").SinglyLinkedList;

class Stack {
  constructor() {
    this.stack = new SLL();
    this.size = this.stack.length;
  }

  /**
   * push new item to the stack
   * @param {*} val
   * @return {number}
   */
  push(val) {
    this.stack.unshift(val);
    this.size = this.stack.length;
    return this.stack.length;
  }

  /**
   * pop the last item in the stack
   * @return {Item|void}
   */
  pop() {
    const popped = this.stack.shift();
    this.size = this.stack.length;
    return popped ? popped.val : null;
  }
}

module.exports = { Stack };
