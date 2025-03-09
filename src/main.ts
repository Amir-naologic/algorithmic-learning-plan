class Stack<T>{
    private items: T[]; //Declare the array to store the data

    constructor() {
        this.items = []; // Initialize the items to an empty array
    }

    // Push method for adding one item
    push(item: T): void {
        this.items.push(item);
    }

    // Pop for removing the last pushed item
    pop(): T | undefined {
        return this.items.pop();
    }
    //Peek for showing the last added element
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    //Checks if the items are empty
    isEmpty(): boolean{
        return this.items.length === 0;
    }

    //The number of items in the items array
    size(): number{
        return this.items.length;
    }

}


const stackTest = new Stack<number>();

stackTest.push(10);
stackTest.push(20);
stackTest.push(30);
console.log(stackTest.peek());
console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.isEmpty());
console.log(stackTest.size());

const secondStack = new Stack<string>();

secondStack.push("Amir")
console.log(secondStack.peek());