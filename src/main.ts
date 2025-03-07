class Stack<T>{
    private items: T[]; //Declare the array to store the data

    constructor() {
        this.items = []; // Initialize the items to an empty array
    }

    // Push method for adding one item
    push(item: T): void {
        this.items.push(item);
    }

    // Pop for removing the last pushed item
    pop(): T | undefined {
        return this.items.pop();
    }
    //Peek for showing the last added element
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    //Checks if the items are empty
    isEmpty(): boolean{
        return this.items.length === 0;
    }

    //The number of items in the items array
    size(): number{
        return this.items.length;
    }

}


const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());

const secondStack = new Stack<string>();

secondStack.push("Amir")
console.log(secondStack.peek());


/*
    In this example I will save it only using type number which is a better approach?
    No because the above is more dynamic in the below case we can only use it for number stacks
    class Stack{

    private items: number[]; // Stack list

    constructor() {
        this.items = [];
    }

    push(item: number): void {
        this.items.push(item);
    }

    pop(): number | undefined {
        return this.items.pop();
    }

    peek(): number | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean{
        return this.items.length === 0;
    }


    size(): number{
        return this.items.length;
    }

}


const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
 */