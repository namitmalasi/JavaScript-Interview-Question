class CircularQueue {
  constructor(capacity) {
    this.items = [];
    this.head = 0;
    this.tail = 0;
    this.count = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.capacity === this.count;
  }

  //   adding the element to the queue
  enqueue(element) {
    if (this.isFull()) {
      return new Error("Queue is Full");
    }
    this.items[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
  }

  //   removing the element from the queue
  dequeue() {
    if (this.count === 0) return null;

    let item = this.items[this.head];
    this.head = (this.head + 1) % this.capacity;

    this.count--;
    return item;
  }
}

const queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue);

