//Circle Area
/*
=> Write a program to calculate circle area 
=> Then print it on the screen
=> The user should enter : r
Example input => 5
Output => 78,54
*/


const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

 const PI = 3.14;

 function calculateCircleArea(r) {
    
    return PI * (r * r);
 }
//  prompt the user to enter the radius of the circle
 rl.question('Enter the radius r : ', (inputr) => {

            //parse input string to number
          const  r = parseFloat(inputr);
          
          //validate the input
          if (isNaN(r) || r <= 0) {
            console.log('Invalid input. Please enter a positive number.');
          } else {
            // calculate area
             const area = calculateCircleArea(r);
            
              // print area
            console.log(`Area is  ${area.toFixed(2).replace('.', ',')}`);
          }
             rl.close();
    

});