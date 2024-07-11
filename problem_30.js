//Factorial of N!
/*
=>Write a program to calculate factorial of N!
Examples:
factorial of 6 => 6*5*4*3*2*1 = 720

Note: user should only enter positive number 
otherwise reject it and ask to enter again
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = n; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

function promptForNumber() {
    readline.question('Enter a positive number to calculate its factorial: ', (userInput) => {
        const n = parseInt(userInput);

        if (isNaN(n) || n <= 0) {
            console.error('Invalid input. Please enter a positive number.');
            promptForNumber(); // Ask for input again
        } else {
            const result = calculateFactorial(n);
            console.log(`Factorial of ${n} is: ${result}`);
            readline.close(); // Close the readline interface
        }
    });
}

promptForNumber();
