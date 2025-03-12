/**
 *  Queue implementation using an array
 */
class Queue<T> {

    private readonly data: T[];

    constructor(q: T[] = []) {
        this.data = q;
    }

    public enqueue(value: T): void {
        this.data.push(value);
    }

    public isEmpty(): boolean {
        return this.data.length === 0;
    }

    /**
     *  Returns the number of elements in the queue
     */
    public size(): number {
        return this.data.length;
    }

    public dequeue(): T | undefined {

        // -->Check: if queue is empty before removing
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }
        return this.data.shift();
    }

    /**
     *  Returns the first element of the queue
     */
    public peek(): T | undefined {

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