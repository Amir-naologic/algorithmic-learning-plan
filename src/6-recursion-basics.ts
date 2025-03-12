/**
 * Recursive factorial example
 */
function factorial(num: number): number {

    // -->Check: exit condition
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));

/**
 * Iterative factorial example
 */
function iterativeFactorial(num: number): number {

    let fact = 1; // -->Initialize: fact to store the factorial result

    // -->Iterate: from 1 to num, multiply fact by each number
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

console.log(iterativeFactorial(5));

/**
 * Recursive Fibonacci example
 */
function fibonacci(num: number): number {

    // -->Check: exit condition
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));

/**
 * Iterative fibonacci example.
 */
function iterativeFibonacci(num: number): number {
    let a = 0;
    let b = 1;

    // -->Iterate: from 2 to num, compute fibonacci sequence
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return num === 0 ? a : b;
}

console.log(iterativeFibonacci(5));
