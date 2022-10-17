const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    this.queue = new ListNode(null);
  }

  getUnderlyingList() {
    return this.queue;
  }

  returnNextRecursive(node) {
    if (node.next) {
      return this.returnNextRecursive(node.next);
    } else {
      return node;
    }
  }

  enqueue(value) {
    if (this.queue.value === null) {
      this.queue.value = value;
    } else {
      const lastItem = this.returnNextRecursive(this.queue);
      lastItem.next = new ListNode(value);
    }
  }

  dequeue() {
    let result = this.queue.value;
    this.queue = this.queue.next;
    return result;
  }
}

module.exports = {
  Queue
};
