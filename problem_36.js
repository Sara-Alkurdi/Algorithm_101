/*
=> Write a program to ask the user to enter:
.Number1
.Number2
.Operation type
then perform the calculation according to the operation type as follows:
"+" : add the two numbers
"-" : substract the two numbers  
"*" : multiply the two numbers  
"/" : divide the two numbers 
example input => 10 * 20
output => 200
*/ 

// index.js
const readline = require('readline');

// Create interface for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform the calculation
function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Wrong operation';
    }
}

// Prompt the user for input
rl.question('Enter the first number: ', (input1) => {
    const num1 = parseFloat(input1);

    rl.question('Enter the second number: ', (input2) => {
        const num2 = parseFloat(input2);

        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            const result = calculate(num1, num2, operation);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
