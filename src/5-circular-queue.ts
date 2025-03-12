/**
 * Circular Queue implementation using a fixed-size array
 */
class CircularQueue<T> {

    private queue: T[];
    private front: number;
    private rear: number;
    private capacity: number; // -->Maximum: size of the queue
    private currentSize: number; // -->Current: number of elements in the queue


    constructor(capacity: number) {

        this.capacity = capacity;

        //-->Initialize new queue of type generic T and of the size that's given
        this.queue = new Array<T>(capacity);
        this.front = -1; // --> Initially set front to -1 indicating the queue is empty
        this.rear = -1;  // --> Initially set rear to -1 indicating the queue is empty
        this.currentSize = 0;
    }

    public enqueue(item: T): void {

        if (this.isFull()) {
            throw new Error("Queue is full cannot add")
        }

        if (this.front === -1) {
            this.front = 0;
        }

        // -->Circularly: update the rear index
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = item; // -->Place: item at the rear position
        this.currentSize++;
    }

    /**
     * Removes an element from the front of the queue
     */
    public dequeue(): T | null {

        if (this.isEmpty()) {
            throw new Error("Queue is Empty")
        }

        const item = this.queue[this.front]; // --> Get the element at the front

        // -->Circularly: update the front index
        this.front = (this.front + 1) % this.capacity;
        this.currentSize--;


        return item;
    }

    /**
     * Get top element
     */
    public peek(): T | null {

        if (this.isEmpty()) {
            throw new Error("Queue is empty")
        }

        return this.queue[this.front]; // --> Return the element at the front of the queue
    }

    public isEmpty(): boolean {
        return this.currentSize === 0;
    }

    public isFull(): boolean {
        return this.currentSize === this.capacity;
    }

    /**
     * Get current size of the stack
     */    public size(): number {
        return this.currentSize;
    }
}

const circularQueue = new CircularQueue<number>(3);

circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);

console.log(circularQueue.isFull());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.isFull());
circularQueue.enqueue(3);
console.log(circularQueue.peek());