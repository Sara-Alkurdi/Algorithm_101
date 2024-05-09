//half number
//Ask the user to enter number
//then print the half number 


const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Enter a number: ', (number) => {
   // Convert input to a number
   number = parseInt(number);
   halfNumber = number/2;

   console.log("Half of " + number + " is " + halfNumber)

   rl.close();
});