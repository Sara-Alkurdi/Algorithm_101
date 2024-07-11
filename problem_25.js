//Validate age between 18 & 45
/*
=> Write a program to ask the user to enter : Age
If age is between 18 & 45 =>
    Then print "valid age" otherwise print "invalid age"
    and re-ask the user to enter the valid age
=> Note it should ask the user to enter a valid age until
 he or she enters it.
 */

const { throws } = require('assert');

//  const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   function validateAge(age) {
//     if (isNaN(age) || age < 18 || age > 45) {
//       throw new Error('Invalid age. Please enter a number between 18 and 45.');
//     }
//     return age;
//   }
  
//   function askForAge() {
//     readline.question('Enter your age: ', (ageInput) => {
//       try {
//         const age = validateAge(ageInput);
//         console.log(`Valid age: ${age}`);
//         readline.close(); // Close after successful validation
//       } catch (error) {
//         console.error(error.message);
//         askForAge(); // Ask again if input is invalid
//       }
//     });
//   }
  
//   askForAge();
  



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateAge(age) {
    if (isNaN(age) || age < 18 || age > 45) {
        throw new Error('Ivalid age. Please enter a number between 18 & 45.');
    }
    return age;
}

function askForAge() {
    readline.question('Enter your age: ', (ageInput) => {
        try {
            const age = validateAge(ageInput);
            console.log(`Valid age: ${age}`);
            readline.close();
        } catch (error) {
            console.error(error.message);
            askForAge();
        }
    });
}
askForAge();