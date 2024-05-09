//Full Name
/*
=> Write a program to ask the user to enter: 
.First Name 
.Last Name
=> Then print full name on screen
Example Input:
.Walaa
.Taha
Output => Walaa Taha
*/
const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question("Enter your first name: ", (firstName) => {
  
 rl.question("Enter your last name: ", (lastName) => {
   
    //concatenate the first name and last name to form the full name  
    const fullName = firstName + " " + lastName;

    //print the full name
   console.log("Full Name:", fullName);

   rl.close();
 });
});



