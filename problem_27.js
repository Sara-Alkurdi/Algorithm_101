//Print Numbers 
/*
Write a program to print numbers from N to 1
input  10 
output 10 9 8 7.....1
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function printNumbersReverse(n) {
    if (isNaN(n) || n <= 0) {
      console.error('Invalid input. Please enter a positive number.');
      return; // Exit if input is invalid
    }
  
    for (let counter = n; counter >= 1; counter--) {
      console.log(counter);
    }
  }
  
  readline.question('Enter a number: ', (userInput) => {
    const n = parseInt(userInput); // Convert input to a number
    printNumbersReverse(n);
    readline.close();
  });
  