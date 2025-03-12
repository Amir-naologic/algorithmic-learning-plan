/**
 * Implementation of a Min Stack data structure using two arrays
 */
class MinStack {
    /**
     * Main stack for storing all the elements
     */
    public stack: number[];
    /**
     * Helper stack for tracking the minimum elements
     */
    public minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * Adds an item to the stack
     */
    public push(item: number): void {
        const currentMin = this.getMin();

        // -->If: the item is smaller than or equal to the current minimum, it's also pushed onto minStack.
        if (currentMin === undefined || item <= currentMin) {
            this.minStack.push(item);
        }

        this.stack.push(item);
    }

    /**
     * Get the minimum element from the stack
     */
    public getMin(): number | undefined {
        if (this.minStack.length === 0) {
            return undefined;
        }

        // -->Top: element of minStack is the current minimum
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(10);
minStack.push(4);
minStack.push(1);

console.log(minStack.getMin());
console.log(minStack.stack);
console.log(minStack.minStack);
