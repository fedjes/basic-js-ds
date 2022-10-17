const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    let newNode = new Node(data);
    
    if (!this.root()) {
      this.root1 = newNode;
    } else {
      this.addNode(this.root1, newNode);
    }
  }

  addNode(root, node) {
    if (root.data > node.data) {

      if ( root.left === null ) {
        root.left = node; 
      } else {
        this.addNode(root.left, node);
      }

    } else {
      if (root.right === null) {
        root.right = node
      } else {
        this.addNode(root.right, node)
      }
    }
  }

  has(data) {
    return !!this.nodeHasOrGoNext(this.root1, data);
  }

  nodeHasOrGoNext(node, data) {
    if (node === null) {
      return null;
    } else if (data < node?.data) {
      return this.nodeHasOrGoNext(node?.left, data);
    } else if (data > node?.data) {
      return this.nodeHasOrGoNext(node?.right, data);
    } else {
      return node
    }
  }

  find(data) {
    return this.nodeHasOrGoNext(this.root1, data);
  }

  remove(data) {
    this.root1 = this.removeNode(this.root1, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node;
    } else {
      if (node?.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node?.left === null) {
        node = node?.right;
        return node;
      } else if (node?.right === null) {
        node = node?.left;
        return node;
      }

      let deleted = this.findMinNode(node?.right);
      node.data = deleted?.data;

      node.right = this.removeNode(node?.right, deleted?.data);
      return node;
    }
  }

  min() {
    return this.findMinNode(this.root1).data;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node?.left)
    }
  }

  max() {
    return this.findMaxNode(this.root1).data;
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};