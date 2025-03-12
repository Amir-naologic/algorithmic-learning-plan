/**
 * Computes the factorial of a number using recursion
 *
 * @example:
 *  factorial(5)
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
 * Computes the factorial of a number using iteration
 *
 * @example:
 *  iterativeFactorial(5)
 */
function iterativeFactorial(num: number): number {
    // -->Initialize: fact to store the factorial result
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

console.log(iterativeFactorial(5));

/**
 * Computes the given Fibonacci number using recursion
 *
 * @example:
 *  fibonacci(5)
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
 * Computes the given Fibonacci number using iteration
 *
 * @example:
 *  iterativeFibonacci(5)
 */
function iterativeFibonacci(num: number): number {
    /**
     * Initialize first two Fibonacci numbers
     */
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
