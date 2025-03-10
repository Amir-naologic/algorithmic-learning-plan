/**
 * Below code implements a stack using a singly linked list
 */


class StackNode<T> {
    data: T;
    next: StackNode<T> | null;

    constructor(new_data: T) {
        this.data = new_data;
        this.next = null;
    }
}

class LinkedListStack<T> {
    public head: StackNode<T> | null;
    private counter: number;

    constructor() {
        // -->Initialize: head as null (empty stack)
        this.head = null;
        // -->Initialize: counter to track size
        this.counter = 0;
    }

    // -->Check: if stack is empty
    public isEmpty(): boolean {
        return this.head === null;
    }

    // -->Add: new element to the stack
    public push(new_data: T): void {
        // -->Create: a new node with the given data
        const new_node = new StackNode<T>(new_data);
        // -->Link: new node to current head
        new_node.next = this.head;
        this.counter++;
        // -->Update: head to new node
        this.head = new_node;
    }

    // -->Remove: top element from the stack
    public pop(): T | undefined {
        // -->Check: if stack is empty
        if (this.isEmpty()) {
            console.log("Stack is empty 😢");
            return undefined;
        }

        // -->Get: data of current head
        const poppedData = this.head?.data;
        // -->Update: head to next element
        this.head = this.head && this.head?.next;
        this.counter--;

        return poppedData;
    }

    // -->Get: top element without removing it
    public peek(): T | undefined {
        // -->Check: if stack is empty before accessing data
        if (!this.isEmpty()) {
            return this.head?.data;
        } else {
            console.log("Stack is empty");
            return undefined;
        }
    }

    // -->Get: current size of the stack
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