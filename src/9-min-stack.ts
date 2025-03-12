/**
 * Implementation of a Min Stack data structure using two arrays example
 */
class MinStack {
    public stack: number[];
    public minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

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
        return this.minStack[this.minStack.length - 1]; // -->Top: element of minStack is the current minimum
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
