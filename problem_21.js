//Circle Area Along the circumference
/*
=> Write a program to calculate circle area along the circumference
=> Then print it on the screen

=> the user should enter : L
Example input => 20
output => 31,831 */


const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

 const PI = 3.14;

 function calculateCircleArea(L) {
    
    return (L * L) / (4 * PI);
 }
//  prompt the user to enter A
 rl.question('Enter L : ', (inputL) => {

            //parse input string to number
          const  L = parseFloat(inputL);
          
          //validate the input
          if (isNaN(L) || L <= 0) {
            console.log('Invalid input. Please enter a positive number.');
          } else {
            // calculate area
             const area = calculateCircleArea(L);
            
              // print area
            console.log(`Area is  ${area.toFixed(3).replace('.', ',')}`);
          }
             rl.close();
    

});