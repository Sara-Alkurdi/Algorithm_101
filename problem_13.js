// Max of three numbers
/*
=> Write a program to ask the user to enter :
.A 
.B
.C
=> Then print the max number
Examples Inputs: 10 20 30
Outputs => 30
*/



 const readline = require('readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 // Initialize variables to store the numbers
 let A, B, C;

 // Ask the user to enter the first number
 rl.question("Enter A: ", function(inputA) {
   // Parse the input to convert it to a number
   A = parseFloat(inputA);

   // Ask the user to enter the second number
   rl.question("Enter B: ", function(inputB) {
     // Parse the input to convert it to a number
     B = parseFloat(inputB);

     rl.question("Enter C: ", function(inputC) {
        // Parse the input to convert it to a number
        C = parseFloat(inputC);

     // check max number
     if (A > B) {
        if (A > C) {
            console.log(`${A}`);
        } else if (B > C) {
            console.log(`${B}`);
        } else {
            console.log(`${C}`);
     }
    } 

     // Close the readline interface
       rl.close();
    });
   });
 });

// 2nd method


// const readline = require('readline');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   // Declare variables to store the numbers
//   let A, B, C;
  
//   // Ask the user to enter the first number
//   rl.question("Enter A: ", function(inputA) {
//     // Parse the input to convert it to a number
//     A = parseFloat(inputA);
  
//     // Ask the user to enter the second number
//     rl.question("Enter B: ", function(inputB) {
//       // Parse the input to convert it to a number
//       B = parseFloat(inputB);
  
//       // Ask the user to enter the third number
//       rl.question("Enter C: ", function(inputC) {
//         // Parse the input to convert it to a number
//         C = parseFloat(inputC);
  
//         // Determine the maximum number among A, B, and C
//         const maxNumber = Math.max(A, B, C);
  
//         // Print the maximum number
//         console.log("Max Number:", maxNumber);
  
//         // Close the readline interface
//         rl.close();
//       });
//     });
//   });