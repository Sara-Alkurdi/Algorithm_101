// hire a driver case 1
// write a program to ask the user to enter his age and driver license
// then print "Hired" if his age is grater than 21 and he has a driver license 
// otherwise print "Rejected"

const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

//  Ask the user to enter their age
 rl.question('Enter your age: ', (ageInput) => {
   // Convert input to a number
  const age = parseInt(ageInput);

// Ask the user if they have a driver's license   
 rl.question('Do you have a driver\'s license? (true/false): ', (licenseInput) => {
   // check if the user is older than 21 and has a driver's license
   if (age > 21 && licenseInput.toLowerCase() === 'true') {
     console.log('Hired');
   } else {
     console.log('rejected');
   }
//close the interface
   rl.close();
});
});