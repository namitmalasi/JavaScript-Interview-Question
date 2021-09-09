class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  //   adding the element to the queue
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
    this.count++;
  }

  //   removing the element from the queue
  dequeue() {
    if (this.count === 0) return null;

    let item = this.items[this.head];
    this.head++;
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
    }
    this.count--;
    return item;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());

// One main drawback in using this type of queue is the memory wastage.
// Circular queue can overcome this disadvantage.
