/**
 * Below code Evaluates a Postfix Expression Using a Stack.
 */


function evaluatePostFix(expression: string): number {
    // -->Initialize: A stack to hold operands for evaluation
    const stack: number[] = [];

    // -->Split the expression into tokens based on spaces
    const tokens = expression.split(' ');

    // -->Iterate: Loop through each token in the postfix expression
    for (let token of tokens) {
        // -->Check: If the token is a number, push it onto the stack
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
        } else {
            // -->Check: If the token is an operator, pop two operands from the stack
            const operator1 = stack.pop();
            const operator2 = stack.pop();

            // -->Check: Ensure there are enough operands to perform the operation
            if (operator1 === undefined || operator2 === undefined) {
                throw new Error('Invalid expression: not enough operands.');
            }

            switch (token) {
                case '+':
                    stack.push(operator1 + operator2);
                    break;
                case '-':
                    stack.push(operator1 - operator2);
                    break;
                case '*':
                    stack.push(operator1 * operator2);
                    break;
                case '/':
                    stack.push(operator1 / operator2);
                    break;
                default:
                    throw new Error('Unrecognized expression: ' + operator1);
            }
        }
    }

    // -->Pop the final result from the stack
    const result = stack.pop();
    // -->Check: If no result is found, the expression is invalid
    if (result === undefined) {
        throw new Error('Invalid expression: result is undefined.');
    }

    return result;
}

console.log(evaluatePostFix("2 3 + 4 *"));
