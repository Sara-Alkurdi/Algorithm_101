// Average of 3 marks
/*
=> Write a program to ask the user to enter :
.Mark1 
.Mark2
.Mark3
=> Then print the average of the entered marks
Examples Inputs: 90 80 70
Output => 80
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize variables to store the marks
let mark1, mark2, mark3;

// Ask the user to enter the first mark
rl.question("Enter Mark1: ", function(input1) {
  // Parse the input to convert it to a number
  mark1 = parseFloat(input1);

  // Ask the user to enter the second mark
  rl.question("Enter Mark2: ", function(input2) {
    // Parse the input to convert it to a number
    mark2 = parseFloat(input2);

    // Ask the user to enter the third mark
    rl.question("Enter Mark3: ", function(input3) {
      // Parse the input to convert it to a number
      mark3 = parseFloat(input3);

      // Calculate the average of the marks
      const avg = (mark1 + mark2 + mark3) / 3;

      // Print the average
      console.log("Average: ", avg);

      // Close the readline interface
      rl.close();
    });
  });
});