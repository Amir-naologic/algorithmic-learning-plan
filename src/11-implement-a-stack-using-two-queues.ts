/**
 *  Below code implements a stack using two queues.
 */
class StackWithTwoQueue<T> {

    // -->Declare: Two queues to simulate a stack
    private queue1: T[];
    private queue2: T[];

    constructor() {

        // -->Initialize: both queues are empty initially
        this.queue1 = [];
        this.queue2 = [];
    }

    // -->Check: if the stack is empty
    public isEmpty(): boolean {
        return this.queue1.length === 0;
    }

    // -->Get: total number of elements in queue1
    public size(): number {
        return this.queue1.length;
    }

    // -->Add: element to the stack
    public push(value: T): void {
        this.queue1.push(value);
    }

    /**
     *  Below code implements a stack using two queues.
     */
    public pop(): T | undefined {

        // -->Check: if queues are empty
        if (this.isEmpty()) {
            throw new Error("Both Queues are empty");
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

    // -->Peek: get the top element from the stack
    public peek(): T | undefined {
        // -->Check: if both queues are empty, throw an error
        if (this.isEmpty()) {
            throw new Error("Both Queues are empty");
        }

        // -->Transfer: all elements except the last one from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(<T>this.queue1.shift());
        }

        const topElement = this.queue1[0];

        // -->Transfer: the last element from queue1 to queue2 (keeping it in queue1 temporarily)
        this.queue2.push(<T>this.queue1.shift());

        // -->Swap: queue1 and queue2 to restore the state of the stack
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