//Circle Area Through Diameter
/*
=> Write a program to calculate circle area through diameter 
=> then print it on the screen
=> the user should enter : d
Example input => 10
output => 78,54
*/

const readline = require('readline');

// create interface to read input from the console
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

 const PI = 3.14;

 function calculateCircleArea(d) {
    
    return (PI * d * d) / 4;
 }
//  prompt the user to enter the diameter of the circle
 rl.question('Enter the diameter d : ', (inputd) => {

            //parse input string to number
          const  d = parseFloat(inputd);
          
          //validate the input
          if (isNaN(d) || d <= 0) {
            console.log('Invalid input. Please enter a positive number.');
          } else {
            // calculate area
             const area = calculateCircleArea(d);
            
              // print area
            console.log(`Area is  ${area.toFixed(2).replace('.', ',')}`);
          }
             rl.close();
    

});