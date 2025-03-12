/**
 * Node representing an element in the linked list queue
 */
class QueueNode<T> {
    /**
     * Value of the node
     */
    public data: T;
    /**
     * Reference to the next node in the queue
     */
    public next: QueueNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Queue implementation using a linked list
 */
class LinkedListQueue<T> {
    /**
     * Points to the front node of the queue
     */
    public front: QueueNode<T> | null | undefined;
    /**
     * Points to the rear (last) node of the queue
     */
    public rear: QueueNode<T> | undefined;
    /**
     * Tracks the current size of the queue
     */
    public counter: number;

    constructor() {
        this.front = undefined;
        this.rear = undefined;
        this.counter = 0;
    }

    /**
     * Checks if the queue is empty
     */
    public isEmpty(): boolean {
        return this.front === undefined && this.rear === undefined;
    }

    /**
     * Adds an element to the queue
     */
    public enqueue(new_data: T): void {
        // -->Create: new node
        const new_node = new QueueNode<T>(new_data);

        if (this.rear === undefined) {
            // -->Set: front and rear to new node when queue is empty
            this.front = new_node;
            this.rear = new_node;

            this.counter++;
            return;
        }

        // -->Link: the current rear's next to the new node
        this.rear.next = new_node;

        // -->Update: rear to the new node as it is now the last element
        this.rear = new_node;
        this.counter++;
    }

    /**
     * Remove item from front of queue
     */
    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        // -->Get: data of the front element to be dequeued
        let dequeuedData = this.front?.data;

        // -->Update: front to the next element in the queue
        this.front = this.front?.next;
        this.counter--;

        if (this.front === undefined) {
            this.rear = undefined;
        }
        return dequeuedData;
    }

    /**
     * Get top element
     */
    public peek(): T | undefined {
        return this.isEmpty() ? undefined : this.front?.data;
    }

    /**
     * Gets the current size of the queue
     */
    public size(): number {
        return this.counter;
    }
}

const q = new LinkedListQueue<number>();

q.enqueue(10);
q.enqueue(20);

console.log("peek", q.peek());
console.log("dequeue: ", q.dequeue());
console.log("dequeue: ", q.dequeue());

console.log({ size: q.size() });
console.log({ isEmpty: q.isEmpty() });
