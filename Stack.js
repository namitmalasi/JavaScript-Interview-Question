class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //   Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to position ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if (this.count === 0) return undefined;

    let deletedItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deletedItem} removed`);
    return deletedItem;
  }
  // Check top element in Stack
  peek() {
    console.log(`The top element is ${this.items[this.count - 1]}`);
    let peekedItem = this.items[this.count - 1];
    return peekedItem;
  }

  // Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count === 0;
  }

  // Check size of Stack
  size() {
    console.log(`${this.count} element in stack `);
    return this.count;
  }

  // print elements of stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str = str + this.items[i] + " ";
    }
    return str;
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.pop();
stack.isEmpty();
stack.peek();
console.log(stack.print());
