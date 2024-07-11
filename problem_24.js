//Validate age between 18 & 45
/*
=> Write a program to ask the user to enter : Age
If age is between 18 & 45 =>
    Then print "valid age" otherwise print "invalid age" 
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function validateAge(age) {
    if (isNaN(age) || age < 18 || age > 45) {
      throw new Error('Invalid age. Please enter a number between 18 and 45.');
    }
    return age;
  }
  
  readline.question('Enter your age: ', (ageInput) => {
    try {
      const age = validateAge(ageInput);
      console.log(`Valid age: ${age}`);
    } catch (error) {
      console.error(error.message);
    } finally {
      readline.close();
    }
  });
  