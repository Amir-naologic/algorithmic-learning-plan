/**
 * Below code Reverses a String Using a Stack.
 */

// -->Define: A Stack class to hold elements and implement stack operations
class ReverseStack<T> {
    private elements: T[];

    // -->Initialize: The stack with an empty array
    constructor() {
        this.elements = [];
    }

    // -->Add: Push an element onto the stack
    public push(item: T): void {
        this.elements.push(item);
    }

    // -->Remove: Pop an element from the stack
    public pop(): T | undefined {
        return this.elements.pop();
    }

    // -->Check: If the stack is empty
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

// -->Function: reverse a string by using the stack
function reverse(str: string) {
    let s = new ReverseStack<string>();

    let i = 0;
    let reversedStr = '';

    // -->Push each character of the string onto the stack
    while (i !== str.length) {
        s.push(str.charAt(i)); // -->Push: Current character to stack
        i++; // -->Increment: Move to the next character
    }

    // -->Pop characters from the stack and build the reversed string
    while (!s.isEmpty()) {
        reversedStr += s.pop(); // -->Pop: Character from stack and append to reversedStr
    }

    return reversedStr;
}

console.log(reverse("Amir"));
