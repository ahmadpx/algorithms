/**
 * Single linked list
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * add item at tail (at the end of the list)
   * @param {*} val
   * @return {SinglyLinkedList}
   */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.length;
    }

    return this;
  }

  /**
   * remove the tail (the last item of the list)
   * @return {Item|void}
   */
  pop() {
    if (!this.head) return;

    if (this.length === 1) {
      const popped = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }

    let current = this.head;
    let popped = null;
    while (current.next) {
      if (current.next === this.tail) {
        popped = this.tail;
        this.tail = current;
        this.tail.next = null;
        this.length -= 1;
        break;
      }
      current = current.next;
    }
    return popped;
  }

  /**
   * remove the head (the first item of the list)
   * @return {Item|void}
   */
  shift() {
    if (!this.head) return;
    const removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return removed;
    }

    if (this.head.next === this.tail) {
      this.head = this.tail;
      --this.length;
      return removed;
    }

    this.head = this.head.next;
    --this.length;

    return removed;
  }

  /**
   * add item at head (in the beginning of the list)
   * @param {*} val
   * @return {Item}
   */
  unshift(val) {
    if (!this.head) {
      ++this.length;
      return this.push(val);
    }

    if (this.length === 1) {
      this.head = new Node(val);
      this.head.next = this.tail;
      ++this.length;
      return this.head;
    }

    ++this.length;
    const oldHead = this.head;
    this.head = new Node(val);
    this.head.next = oldHead;

    return this.head;
  }

  /**
   * get item from the list
   * @param {Number} index
   * @return {Item|void}
   */
  get(index) {
    if (typeof index !== "number") return;
    if (index < 0 || index >= this.length) return;
    if (index === this.length - 1) return this.tail;

    let current = this.head;
    let i = 0;
    while (current.next) {
      if (index === i) {
        return current;
      }
      ++i;
      current = current.next;
    }
  }

  /**
   * set the value of an item
   * @param {Number} index
   * @param {*} val
   * @return {Item|void}
   */
  set(index, val) {
    if (typeof index !== "number") return;
    if (index < 0 || index >= this.length) return;

    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
    }

    return foundNode;
  }

  /**
   * insert item to the list
   * @param {Number} index
   * @param {*} val
   * @return {Item|void}
   */
  insert(index, val) {
    if (typeof index !== "number") return;
    if (index < 0 || index > this.length) return;

    if (index === this.length) {
      this.push(val);
      return this.tail;
    }

    if (index === 0) {
      this.unshift(val);
      return this.head;
    }

    const prevNode = this.get(index - 1);

    if (prevNode) {
      const temp = prevNode.next;
      prevNode.next = new Node(val);
      prevNode.next.next = temp;
      ++this.length;
      return prevNode.next;
    }
  }

  /**
   * remove item from the list
   * @param {Number} index
   * @return {Item|void}
   */
  remove(index) {
    if (typeof index !== "number") return;
    if (index < 0 || index >= this.length) return;

    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = prevNode.next.next;
    --this.length;

    return removed;
  }

  /**
   * reverse the list
   * @return {SinglyLinkedList}
   */
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  /**
   * log the list as an array
   */
  log() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current);
      current = current.next;
    }

    console.log(arr);
  }
}

/**
 * List Node
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = { SinglyLinkedList };
