/**
 * Reverse a string by using a stack implementation
 */
// -->Define: A Stack class to hold elements and implement stack operations
class ReverseStack<T> {

    private elements: T[];

    // -->Initialize: The stack with an empty array
    constructor() {
        this.elements = [];
    }

    public push(item: T): void {
        this.elements.push(item);
    }

    public pop(): T | undefined {
        return this.elements.pop();
    }

    public isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

/**
 * Reverse a string using by using the above ReverseStack class
 */
function reverse(str: string) {

    let s = new ReverseStack<string>();

    let i = 0;
    let reversedStr = '';

    // -->Push: each character of the string onto the stack
    while (i !== str.length) {
        s.push(str.charAt(i));
        i++;
    }

    while (!s.isEmpty()) {
        reversedStr += s.pop(); // -->Pop: Character from stack and append to reversedStr
    }

    return reversedStr;
}

console.log(reverse("Amir"));
