//power of 2, 3, 4
/*
=>Write a program to ask the user to enter 
.Number
=>Then print the Number^2, Number^3, Number^4
Examples:
Input => 3
Outputs => 9 27 81

step1: ask the user to enter Num
step2: a = Num * Num
step3: b = Num * Num * Num
step4: c = Num * Num * Num * Num
step5: print a, b, c
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculatePowers(num) {
    const square = num * num; // Number^2
    const cube = num * num * num; // Number^3
    const fourthPower = num * num * num * num; // Number^4

    console.log(`The square of ${num} is: ${square}`);
    console.log(`The cube of ${num} is: ${cube}`);
    console.log(`The fourth power of ${num} is: ${fourthPower}`);
}

readline.question('Enter a number: ', (userInput) => {
    const num = parseFloat(userInput); // Convert input to a number

    if (isNaN(num)) {
        console.error('Invalid input. Please enter a valid number.');
    } else {
        calculatePowers(num);
    }

    readline.close();
});
