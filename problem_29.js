//sum even number from 1 to N
/*
=> Write a program to sum even numbers from 1 to N
Examples:
Input: 10
Outputs: 30 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumEvenNumbers(n) {
    if (isNaN(n) || n <= 0) {
      console.error('Invalid input. Please enter a positive number.');
      return; // Exit the function if input is invalid
    }
  
    let counter = 0;
    let sum = 0;
    
    while (counter <= n) {
        
      if (counter % 2 === 0) { // Check if counter is even
        sum += counter;
        
      }
      counter++;// Increment counter even if not even

    //   if (counter > n) {
    //     console.log(`The sum of odd numbers from 1 to ${n} is: ${sum}`);
    //     break; // Exit the loop after printing the sum
    //   }
    }
    console.log(`The sum of even numbers from 1 to ${n} is: ${sum}`);
  }
  
  readline.question('Enter a number: ', (userInput) => {
    const n = parseInt(userInput); // Convert input to a number
    sumEvenNumbers(n);
    readline.close();
  });
  

 
