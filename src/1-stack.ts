/**
 * Stack implementation using an array
 */
class Stack<T> {
    /**
     * List for storing the stack items
     */
    private readonly items: T[];

    constructor() {
        this.items = [];
    }

    /**
     * Adds item to the stack
     */
    public push(item: T): void {
        this.items.push(item);
    }

    /**
     * Removes item from stack
     */
    public pop(): T | undefined {
        return this.items.pop();
    }

    /**
     * Get top element
     */
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    /**
     * Check if stack is empty
     */
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     *  Returns the number of elements in the stack
     */
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