/**
 * Reverse a string by using a stack implementation
 */
class ReverseStack<T> {

    /**
     * List for storing the stack items
     */
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    /**
     * Adds item to the stack
     */
    public push(item: T): void {
        this.elements.push(item);
    }

    /**
     * Removes item from stack
     */
    public pop(): T | undefined {
        return this.elements.pop();
    }

    /**
     * Checks if stack is empty
     */
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

/**
 * Reverses a given string using a stack
 */
function reverseString(str: string) {
    // -->Init: new stack to hold string characters
    let s = new ReverseStack<string>();
    let i = 0;
    let reversedStr = '';

    // -->Push: each character of the string onto the stack
    while (i !== str.length) {
        s.push(str.charAt(i));
        i++;
    }

    while (!s.isEmpty()) {
        reversedStr += s.pop();
    }

    return reversedStr;
}

console.log(reverseString("amir"));
