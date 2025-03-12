/**
 * Stack implementation using a singly linked list
 */
class StackNode<T> {
    /**
     * Stores the value of the node
     */
    public data: T;
    /**
     * Reference to the next node in the stack
     */
    public next: StackNode<T> | null;

    constructor(new_data: T) {
        this.data = new_data;
        this.next = null;
    }
}

class LinkedListStack<T> {
    /**
     * Reference to the top node of the stack
     */
    public head: StackNode<T> | null;

    /**
     * Keeps track of the number of elements in the stack
     */
    private counter: number;

    constructor() {
        // -->Init: head as null (empty stack)
        this.head = null;

        // -->Init: counter to track size
        this.counter = 0;
    }

    /**
     * Check if stack is empty
     */
    public isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Adds new element to the stack by creating a new node
     */
    public push(new_data: T): void {
        // -->Create: new node
        const new_node = new StackNode<T>(new_data);

        // -->Link: new node to current head
        new_node.next = this.head;

        this.counter++;
        this.head = new_node;
    }

    /**
     * Remove item from stack
     */
    public pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        // -->Get: data of current head
        const poppedData = this.head?.data;

        // -->Update: head to next element
        this.head = this.head && this.head?.next;
        this.counter--;

        return poppedData;
    }

    /**
     * Get top element
     */
    public peek(): T | undefined {
        // -->Check: if stack is empty before accessing data
        return this.isEmpty() ? undefined : this.head?.data;
    }

    /**
     * Get size of the stack
     */
    public size(): number {
        return this.counter;
    }
}


const stack = new LinkedListStack<number>();

stack.push(5);
stack.push(15);
console.log("Top element is:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Stack size is:", stack.size());
console.log("Is stack empty?", stack.isEmpty());