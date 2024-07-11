//Rectangle Area
/*
=> Write a program to calculate rectangle area
=> Print it on the screen
Example inputs: 10 20
outputs => 200
 */


const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

 rl.question('Enter a: ', (inputa) => {
    rl.question('Enter b: ', (inputb) => {
    a = parseFloat(inputa);
    b = parseFloat(inputb);
     const A = a * b;

     console.log(`Area is ${A}`);

     rl.close();
   });
 });



// const readline = require('readline');

// // create interface for reading input from the console
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// //function to calculate rectangle area
//  function calculateRectangleArea(length, width) {
//     return length * width;
// }

// // prompt the user to enter length and width
// rl.question('Enter the length: ', (length) => {
//     rl.question('Enter the width: ', (width) => {
//         //parse input strings to numbers
//         length = parseFloat(length);
//         width = parseFloat(width);

//         //calculate area
//        const area =  calculateRectangleArea(length, width);
        
//         //print area
//         console.log("Rectangle Area:", area);

//         // close the readline interface
//         rl.close();
//     });
// });