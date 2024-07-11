//Triangle area 
/*
=> Write a program to calculate tiangle area
=> then print it on the screen
=>the user should enter: a h
Example inputs: 10 8
outputs => 40
*/


const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 


 function calculateTriangleArea(a, h) {
    return (a * h) / 2;
 }
//  prompt the user to enter diagonal and side area of rectangle
 rl.question('Enter the base a : ', (inputa) => {
    rl.question('Enter the height h: ', (inputh) => {

            //parse input strings to numbers
          const  a = parseFloat(inputa);
          const  h = parseFloat(inputh);

        //   validate inputs
        if (isNaN(a) || isNaN(h) || a <= 0 || h <= 0) {
            console.log('Invalid input. Please enter positive numbers.');
        } else {
            // calculate area
             const area = calculateTriangleArea(a, h);
            
              // print area
            console.log(`Area is  ${area}`);
        }
             rl.close();
    });

});