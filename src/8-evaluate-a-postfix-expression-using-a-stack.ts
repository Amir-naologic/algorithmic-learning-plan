/**
 * Postfix expression using a stack implementation
 *
 * @example:
 *  evaluatePostfix("2 3 + 4 *")
 *  evaluatePostfix("5 1 2 + 4 * + 3 -")
 */
function evaluatePostfix(expression: string): number {

    const stack: number[] = [];

    const tokens = expression.split(' ');

    // -->Iterate: through each token in the postfix expression
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

            // -->Perform: the operation based on the operator and then push the results onto the stack
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

    // -->Get: result from stack
    const result = stack.pop();

    // -->Check: If expression is invalid
    if (result === undefined) {
        throw new Error('Invalid expression: result is undefined.');
    }

    return result;
}

console.log(evaluatePostfix("2 3 + 4 *"));
