/*
=> Write a program to sum odd numbers from 1 to N 
examples inputs 10
output 25
 */


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   function sumOddNumbers(n) {
//     if (isNaN(n) || n <= 0) {
//       console.error('Invalid input. Please enter a positive number.');
//       return; // Exit the function if input is invalid
//     }
  
//     let sum = 0;
//     for (let counter = 1; counter <= n; counter += 2) {
//       sum += counter; // Add the current odd number to the sum
//     }
  
//     console.log(`The sum of odd numbers from 1 to ${n} is: ${sum}`);
//   }
  
//   readline.question('Enter a number: ', (userInput) => {
//     const n = parseInt(userInput); // Convert input to a number
//     sumOddNumbers(n);
//     readline.close();
//   });
  
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumOddNumbers(n) {
    if (isNaN(n) || n <= 0) {
      console.error('Invalid input. Please enter a positive number.');
      return; // Exit the function if input is invalid
    }
  
    let counter = 0;
    let sum = 0;
  
    while (counter <= n) {
      if (counter % 2 !== 0) { // Check if counter is odd
        sum += counter;
      }
      counter++; // Increment counter even if not odd
      
       if (counter === n) {
         console.log(`The sum of odd numbers from 1 to ${n} is: ${sum}`);
         break; // Exit the loop after printing the sum
       }
    }
  }
  
  readline.question('Enter a number: ', (userInput) => {
    const n = parseInt(userInput); // Convert input to a number
    sumOddNumbers(n);
    readline.close();
  });
  

