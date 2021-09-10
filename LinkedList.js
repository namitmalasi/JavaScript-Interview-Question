class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //   Adding a node at the beginning of the linkedlist.
  prepend(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //  Adding a node at the back of the list.
  append(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.tail;
      this.tail = node;
      temp.next = this.tail;
    }
    this.size++;
  }

  // Printing the linkedlist
  printList() {
    let data = "";
    let current = this.head;
    while (current !== null) {
      data = data + current.data + " ";
      current = current.next;
    }
    return data;
  }

  //   Removing first node from the list.
  removeFirstElement() {
    if (this.size === 0) return null;
    let data = this.head.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return data;
  }

  //   Removing last node from the list.
  removeLastElement() {
    if (this.size === 0) return null;
    let data = this.tail.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return data;
  }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.append(30);
list.append(40);
console.log(list.printList());
list.removeFirstElement();
console.log(list.printList());
list.removeLastElement();
console.log(list.printList());
