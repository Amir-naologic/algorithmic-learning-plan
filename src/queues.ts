/*
  Below code implements a queue using an array.
*/

class Queue<T> {
    private data: T[];

    constructor(q: T[] = []) {
        // -->Initialize: queue with optional data
        this.data = q;
    }

    // -->Add: element to the queue
    enqueue(value: T): void {
        this.data.push(value);
    }

    // -->Check: if queue is empty
    isEmpty(): boolean {
        return this.data.length === 0;
    }

    // -->Get: number of elements in the queue
    size(): number {
        return this.data.length;
    }

    // -->Remove: first element from the queue
    dequeue(): T | undefined {
        // -->Check: if queue is empty before removing
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }
        return this.data.shift();
    }

    // -->Get: first element without removing it
    peek(): T | undefined {
        // -->Check: if queue is empty before accessing data
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }
        return this.data[0];
    }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());