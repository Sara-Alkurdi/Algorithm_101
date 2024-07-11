//Circle area inscribed in an Isosceles triangle 
/*
=> write a program to calculate circle area inscribed in an isoscles triangle 
=> then print it on the screen
=> the user should enter : a  b
Examples inputs : 20  10
outputs => 47,124
 */

const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 



 function calculateInscribedCircleArea(a, b) {
    const pi = Math.PI;
    const area = (pi * b * b / 4) * ((2 * a - b) / (2 * a + b));
    return area;
 }
//  prompt the user to enter A
 rl.question('Enter the lengths of the two equal sides (a) and the base (b) seperated by space: ', (input) => {
    const [a, b] = input.split(' ').map(Number);

          
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0 || a < b / 2) {
        console.log(`Invalid input. Please ensure the sides are positive numbers and form a valid isosceles tringle.`);
    }  else {
        const area = calculateInscribedCircleArea(a, b);
        console.log(`The area of the inscribed circle is: ${area.toFixed(3).replace('.', ',')}`);
    }
             
            rl.close();
    
});
