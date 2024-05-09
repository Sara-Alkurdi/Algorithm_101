// Max of two numbers
/*
=> Write a program to ask the user to enter :
.Number1 
.Number2
=> Then print the max number
Examples Inputs: 10 20
Outputs => 20
*/

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Initialize variables to store the numbers
// let number1, number2;

// // Ask the user to enter the first number
// rl.question("Enter Number1: ", function(input1) {
//   // Parse the input to convert it to a number
//   number1 = parseFloat(input1);

//   // Ask the user to enter the second number
//   rl.question("Enter Number2: ", function(input2) {
//     // Parse the input to convert it to a number
//     number2 = parseFloat(input2);

//     // check max number
//     if (number1 > number2) {
//         console.log(`${number1}`);
//     } else {
//         console.log(` The Max Number Is ${number2}`);
//     }

//     // Close the readline interface
//       rl.close();
    
//   });
// });


// 2nd method
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let number1, number2; // Declare variables to store the numbers

// Ask the user to enter the first number
rl.question("Enter Number1: ", function(input1) {
  const number1 = parseFloat(input1);

  // Ask the user to enter the second number
  rl.question("Enter Number2: ", function(input2) {
    const number2 = parseFloat(input2);

    // Determine the maximum number
    const maxNumber = Math.max(number1, number2);

    // Print the maximum number
    console.log("Max Number:", maxNumber);

    // Close the readline interface
    rl.close();
  });
});