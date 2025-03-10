/**
 * Below code implements a recursive factorial.
 */

function factorial(num: number): number {
    if (num <= 1) {
        return 1;
    }

    // -->Recursive: multiply num by factorial of (num - 1)
    return num * factorial(num - 1);
}

console.log(factorial(5));

/**
 * Below code implements an iterative factorial.
 */

function iterativeFactorial(num: number): number {
    let fact = 1; // -->Initialize: fact to store the factorial result

    // -->Iterate: from 1 to num, multiply fact by each number
    for (let i = 1; i <= num; i++) {
        fact *= i; // -->Update: fact by multiplying with the current value of i
    }

    return fact;
}

console.log(iterativeFactorial(5));

/**
 * Below code implements a recursive Fibonacci.
 */

function fibonacci(num: number): number {
    // -->Base case: if num is 0 or 1, return num (fibonacci(0) = 0, fibonacci(1) = 1)
    if (num <= 1) {
        return num;
    }

    // -->Recursive: sum of fibonacci(num - 1) and fibonacci(num - 2)
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));

/**
 * Below code implements an iterative Fibonacci.
 */

function iterativeFibonacci(num: number): number {
    let a = 0;
    let b = 1;

    // -->Iterate: from 2 to num, compute fibonacci sequence
    for (let i = 2; i <= num; i++) {
        let temp = a + b; // -->Compute: next fibonacci number by summing a and b
        a = b; // -->Update: a to b (move to next number)
        b = temp; // -->Update: b to the new fibonacci number
    }

    // -->Return: if num is 0, return a (fibonacci(0)), else return b (fibonacci(num))
    return num === 0 ? a : b;
}

console.log(iterativeFibonacci(5));
