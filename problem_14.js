//Swap Numbers
/*
=> Write a program to ask the user to enter:
.Number1 
.Number2
=>Then print the two numbers
=> Then swap the two numbers
=> And print them
Example inputs: 10 20
outputs => 10 20  => 20 10 */

// 1st method

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter Number1: ', (num1) => {
//   rl.question('Enter Number2: ', (num2) => {
//     console.log('Numbers entered:', num1, num2);

//     // Swapping the numbers
//     [num1, num2] = [num2, num1];

//     console.log('After swapping:', num1, num2);

//     rl.close();
//   });
// });


// 2nd method

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter Number1: ', (num1) => {
//   rl.question('Enter Number2: ', (num2) => {
//     console.log('Numbers entered:', num1, num2);

//     // Using a temporary variable to swap numbers
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;

//     console.log('After swapping:', num1, num2);

//     rl.close();
//   });
// });




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter Number 1: ', (number1) => {
    readline.question('Enter Number 2: ', (number2) => {
      console.log(`Numbers before swap: ${number1} ${number2}`);
  
      // Swap logic
      let temp = number1;
      number1 = number2;
      number2 = temp;
  
      console.log(`Numbers after swap: ${number1} ${number2}`);
  
      readline.close();
    });
  });