/**
 * Below code implements a Queue Using Linked Lists
 */


class QueueNode<T> {
    public data: T;
    public next: QueueNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue<T> {
    public front: QueueNode<T> | null | undefined;
    public rear: QueueNode<T> | undefined;
    public counter: number;

    constructor() {
        // -->Initialize: head as undefined (empty queue)
        this.front = undefined;
        // -->Initialize: rear as undefined (empty queue)
        this.rear = undefined;
        // -->Initialize: counter to track size
        this.counter = 0;
    }

    // -->Check: if queue is empty
    public isEmpty(): boolean {
        return this.front === undefined && this.rear === undefined;
    }

    // -->Add: new element to the queue
    public enqueue(new_data: T): void {
        // -->Create: a new node with the given data
        const new_node = new QueueNode<T>(new_data);

        // Check if rear is undefined
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

    // -->Remove: first element from the queue
    public dequeue(): T | undefined {
        // -->Check: if stack is queue
        if (this.isEmpty()) {
            throw new Error("Queue is empty 😢");
        }

        // -->Get: data of the front element to be dequeued
        let dequeuedData = this.front?.data;
        // -->Update: front to the next element in the queue
        this.front = this.front?.next;
        this.counter--;

        // -->Check: if front is undefined (queue is empty)
        if (this.front === undefined) {
            // -->Set: rear to undefined if the queue is empty after the dequeue
            this.rear = undefined;
        }
        return dequeuedData;
    }

    // -->Get: first element without removing it
    public peek(): T | undefined {
        // -->Check: if stack is empty before accessing data
        if (this.isEmpty()) {
            throw new Error("Queue is empty 😢");
        }
        return this.front?.data;
    }

    // -->Get: current size of the queue
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
