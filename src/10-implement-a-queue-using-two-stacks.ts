/**
 *  Queue with two stacks example.
 */
class QueueWithTwoStack<T> {
    /**
     * Declare Two stacks to simulate a queue
     */
    stack1: T[];
    stack2: T[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * Check if both stack are empty
     */
    public isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    /**
     *  Returns the number of elements from the two stacks
     */
    public size(): number {
        return this.stack1.length + this.stack2.length;
    }

    /**
     * Adds an item to the stack
     */
    public enqueue(item: T): void {
        this.stack1.push(item);
    }

    /**
     *  Reverses elements from stack1 to stack2.
     */
    private reverseStack(): void {
        while (this.stack1.length !== 0) {
            // -->Set: elements from stack1 to stack2
            this.stack2.push(<T>this.stack1.pop());
        }
    }

    /**
     *  Removes element from the front of the queue.
     */
    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        this.reverseStack();

        return this.stack2.pop();
    }

    /**
     * Gets top element
     */
    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        this.reverseStack();

        return this.stack2[this.stack2.length - 1];
    }
}

const queueWithTwoStack = new QueueWithTwoStack<number>();

queueWithTwoStack.enqueue(1);
queueWithTwoStack.enqueue(2);
queueWithTwoStack.enqueue(3);
queueWithTwoStack.enqueue(4);

console.log(queueWithTwoStack.dequeue());
console.log(queueWithTwoStack.dequeue());
console.log(queueWithTwoStack.dequeue());
console.log(queueWithTwoStack.size());
console.log(queueWithTwoStack.isEmpty());
console.log(queueWithTwoStack.peek());