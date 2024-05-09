// PASS OR FAIL
/*
=> Ask the user to enter :
.Mark
=> Then print the "PASS" if the mark >= 50, otherwise print "FAIL"
Example Inputs:
.45
Output:
.FAIL
*/

const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Enter the mark: ', (mark) => {
   // Convert input to a number
   mark = parseInt(mark);
   
// check if mark >= 50
if (mark >= 50) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

   rl.close();
});




// 2nd METHOD
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter the mark: ", function(mark) {
//   mark = parseFloat(mark); // Convert mark to a number
//   if (!isNaN(mark)) {
//     if (mark >= 50) {
//       console.log("PASS");
//     } else {
//       console.log("FAIL");
//     }
//   } else {
//     console.log("Invalid input. Please enter a valid number.");
//   }
//   rl.close();
// });