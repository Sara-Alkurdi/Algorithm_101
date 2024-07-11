//sum untill -99
/*
=> Write a program to read numbers from user and sum them 
keep reading until users enters -99 
then print the sum on screen
example input => 10 20 30 40  -99
output => 100
*/

// index.js
const readline = require('readline');

// Create interface for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

function askForNumber() {
    rl.question('Enter a number: ', (input) => {
        const num = parseFloat(input);

        if (num === -99) {
            console.log(`The sum is: ${sum}`);
            rl.close();
        } else {
            sum += num;
            askForNumber();
        }
    });
}

askForNumber();

