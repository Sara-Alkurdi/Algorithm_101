// write a program to ask the user:
// to enter a number 
// to print "Odd" if it is odd or "Even" if it is even


 const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Enter a number: ', (number) => {
   // Convert input to a number
   number = parseInt(number);

   // Check if the number is odd or even
   if (number % 2 === 0) {
     console.log(number + ' is Even');
   } else {
     console.log(number + ' is Odd');
   }

   rl.close();
});