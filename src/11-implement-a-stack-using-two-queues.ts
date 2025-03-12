/**
 *  Below code implements a stack using two queues.
 */
class StackWithTwoQueue<T> {
    /**
     * Declaring two queues to simulate a stack
     */
    private queue1: T[];
    private queue2: T[];

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * Check if queue is empty
     */
    public isEmpty(): boolean {
        return this.queue1.length === 0;
    }

    /**
     *  Returns the number of elements in the first queue
     */
    public size(): number {
        return this.queue1.length;
    }

    /**
     * Adds queue element
     */
    public push(value: T): void {
        this.queue1.push(value);
    }

    /**
     * Removes item from queue
     */
    public pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        // -->Transfer: all elements except the last one from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(<T>this.queue1.shift());
        }

        const shiftedElement = this.queue1.shift();

        // -->Swap: queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return shiftedElement;
    }

    /**
     * Gets top element
     */
    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        // -->Transfer: all elements except the last one from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(<T>this.queue1.shift());
        }

        const topElement = this.queue1[0];

        // -->Transfer: the last element from queue1 to queue2 (keeping it in queue1 temporarily)
        this.queue2.push(<T>this.queue1.shift());

        // -->Swap: queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }
}


const stackWithTwoQueue = new StackWithTwoQueue<number>();

stackWithTwoQueue.push(10);
stackWithTwoQueue.push(20);
stackWithTwoQueue.push(50);
stackWithTwoQueue.push(30);
stackWithTwoQueue.push(70);

console.log("1: ", stackWithTwoQueue.pop());
console.log(stackWithTwoQueue.pop());
console.log(stackWithTwoQueue.pop());
console.log(stackWithTwoQueue.peek());
console.log(stackWithTwoQueue.size());
console.log(stackWithTwoQueue.isEmpty());