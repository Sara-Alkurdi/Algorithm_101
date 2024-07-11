/*
=> Write a program to enter : N
then print numbers from 1 to N
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function printNumbers(n) {
    if (isNaN(n) || n <= 0) {
      console.error('Invalid input. Please enter a positive number.');
      return; // Exit the function if input is invalid
    }
  
    for (let counter = 1; counter <= n; counter++) {
      console.log(counter);
    }
  }
  
  readline.question('Enter a number: ', (userInput) => {
    const n = parseInt(userInput); // Convert user input to a number
    printNumbers(n);
    readline.close();
  });
  

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   function printNumbers(n) {
//     if (isNaN(n) || n <= 0) {
//       console.error('Invalid input. Please enter a positive number.');
//       return; // Exit the function if input is invalid
//     }
  
//     // Start the counter at 1 (as we want to print from 1 to N)
//     let counter = 1;
//     
    
  
//     while (counter <= n) {
//     console.log(counter);
//       counter++; // Increment the counter after printing
//     }
//   }
  
//   readline.question('Enter a number: ', (userInput) => {
//     const n = parseInt(userInput); // Convert user input to a number
//     printNumbers(n);
//     readline.close();
//   });
  