/**
 *  Below code implements a queue using two stacks.
 */


class QueueWithTwoStack<T> {
    // -->Declare: Two stacks to simulate a queue
    stack1: T[];
    stack2: T[];

    constructor() {
        // -->Initialize: both stacks are empty initially
        this.stack1 = [];
        this.stack2 = [];
    }

    // -->Check: if both stacks are empty
    public isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // -->Get: total number of elements in both stacks
    public size(): number {
        return this.stack1.length + this.stack2.length;
    }

    // -->Add: element to the queue by pushing it to stack1
    public enqueue(item: T): void {
        this.stack1.push(item);
    }

    // -->Reverse: elements from stack1 to stack2 to maintain queue order
    private reverseStack(): void {
        while (this.stack1.length !== 0) {
            // -->Move: elements from stack1 to stack2
            this.stack2.push(<T>this.stack1.pop());
        }
    }

    // -->Remove: element from the front of the queue (i.e., from stack2)
    public dequeue(): T | undefined {
        // -->Check: if both stacks are empty, throw an error
        if (this.isEmpty()) {
            throw new Error("Both stacks are empty");
        }

        this.reverseStack();
        // -->Return: remove and return the element from stack2
        return this.stack2.pop();
    }

    // -->Peek: get the first element from the queue
    public peek(): T | undefined {
        // -->Check: if both stacks are empty, throw an error
        if (this.isEmpty()) {
                throw new Error("Both stacks are empty");
        }

        this.reverseStack();
        // -->Return: the element at the front of stack2
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