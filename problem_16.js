//Rectangle area through diagonal and side area
/*
=> write a program to calculate rectangle area through diagonal and side area of rectangle
=> print it on screen
=> the user should enter: a b
Example inputs: 5 40
outputs => 198,431 */

const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 


 function calculateRectangleArea(d, a) {
    return a * Math.sqrt(d * d - a * a);
 }
//  prompt the user to enter diagonal and side area of rectangle
 rl.question('Enter the diagonal d : ', (inputd) => {
    rl.question('Enter the side area a : ', (inputa) => {

            //parse input strings to numbers
            a = parseFloat(inputa);
            d = parseFloat(inputd);

            // calculate area
             const area = calculateRectangleArea(d, a);
            
              // print area
            console.log(`Area is `, area);

             rl.close();
        });

       
   });
