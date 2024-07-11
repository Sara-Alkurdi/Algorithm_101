//Circle Area Inscribed in a square 
/*
=> Write a program to calculate circle area inscribed in a square
=> Then print it on the screen
=> the user should enter : A
Example input => 10
output => 78,54 */


const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

 const PI = 3.14;

 function calculateCircleArea(A) {
    
    return (PI * (A * A)) / 4;
 }
//  prompt the user to enter A
 rl.question('Enter A : ', (inputA) => {

            //parse input string to number
          const  A = parseFloat(inputA);
          
          //validate the input
          if (isNaN(A) || A <= 0) {
            console.log('Invalid input. Please enter a positive number.');
          } else {
            // calculate area
             const area = calculateCircleArea(A);
            
              // print area
            console.log(`Area is  ${area.toFixed(2).replace('.', ',')}`);
          }
             rl.close();
    

});