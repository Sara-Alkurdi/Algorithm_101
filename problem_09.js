// Sum of 3 numbers
/*
=> Write a number to ask the user to enter :
.Number1
.Number2
.Number3
=> Then print the sum of entered numbers
Examples Inputs:
.10
.20
.30
Output => 60
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize variables to store the numbers
let number1, number2, number3;

// Ask the user to enter the first number
rl.question("Enter Number1: ", function(num1) {
  // Parse the input to convert it to a number
  number1 = parseFloat(num1);

  // Ask the user to enter the second number
  rl.question("Enter Number2: ", function(num2) {
    // Parse the input to convert it to a number
    number2 = parseFloat(num2);

    // Ask the user to enter the third number
    rl.question("Enter Number3: ", function(num3) {
      // Parse the input to convert it to a number
      number3 = parseFloat(num3);

      // Calculate the sum of the numbers
      const sum = number1 + number2 + number3;

      // Print the sum
      console.log("Sum:", sum);

      // Close the readline interface
      rl.close();
    });
  });
});