/**
 * Below code implements a stack data structure using an array.
 */


class Stack<T> {
    private readonly items: T[];

    constructor() {
        // -->Initialize: stack
        this.items = [];
    }

    // --> Add: element to the stack
    public push(item: T): void {
        this.items.push(item);
    }

    // --> Remove: last element from the stack
    public pop(): T | undefined {
        return this.items.pop();
    }

    // -->Get: last element without removing it
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // -->Check: if queue is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // -->Get: number of elements in the stack
    public size(): number {
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