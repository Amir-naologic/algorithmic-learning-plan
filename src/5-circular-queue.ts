/**
 * Circular Queue implementation
 */
class CircularQueue<T> {
    /**
     * Array to store the queue elements
     */
    private queue: T[];
    /**
     * Points to the front element of the queue
     */
    private front: number;
    /**
     * Points to the last element of the queue
     */
    private rear: number;
    /**
     * Maximum capacity for the queue
     */
    private capacity: number;
    /**
     * Tracks the current number of elements in this queue
     */
    private currentSize: number;


    constructor(capacity: number) {

        this.capacity = capacity;

        //-->Init: new queue
        this.queue = new Array<T>(capacity);
        this.front = -1;
        this.rear = -1;
        this.currentSize = 0;
    }

    /**
     * Adds an element to the rear of the queue
     */
    public enqueue(item: T): void {
        if (this.isFull()) {
            throw new Error("Queue is full cannot add")
        }

        if (this.front === -1) {
            this.front = 0;
        }

        // -->Circularly: update the rear index to the next position
        this.rear = (this.rear + 1) % this.capacity;

        this.queue[this.rear] = item;
        this.currentSize++;
    }

    /**
     * Removes an element from the front of the queue
     */
    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        // -->Get: the item at the front of the queue
        const item = this.queue[this.front];

        // -->Circularly: update the front index to the next position
        this.front = (this.front + 1) % this.capacity;
        this.currentSize--;

        return item;
    }

    /**
     * Get top element
     */
    public peek(): T | undefined {
        return this.isEmpty() ? undefined : this.queue[this.front];
    }

    /**
     * Checks if the queue is empty
     */
    public isEmpty(): boolean {
        return this.currentSize === 0;
    }

    /**
     * Checks if the queue is full
     */
    public isFull(): boolean {
        return this.currentSize === this.capacity;
    }

    /**
     * Gets the current size of the queue
     */
    public size(): number {
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
console.log(circularQueue.size());
circularQueue.enqueue(3);
console.log(circularQueue.peek());