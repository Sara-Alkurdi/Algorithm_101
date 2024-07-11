//print letters from A to Z
/*
=>write a program to print all letters from A to Z
Example output =>  A B C .....Z
*/

// Function to print letters from A to Z
// function printLetters() {
//     const startChar = 'A'.charCodeAt(0); // Get ASCII code for 'A'
//     const endChar = 'Z'.charCodeAt(0);   // Get ASCII code for 'Z'

//     let result = '';
//     for (let i = startChar; i <= endChar; i++) {
//         result += String.fromCharCode(i) + ' '; // Convert ASCII code to character and add to result string
//     }

//     console.log(result.trim()); // Print the result string, trimmed to remove the trailing space
// }

// // Call the function to print the letters
// printLetters();


let counter = 64; // Initialize counter

while (true) {
    counter += 1; // Increment counter by 1

    if (counter === 91) { // Check if counter is 91 (end condition)
        break; // End the loop
    }

    console.log(String.fromCharCode(counter)); // Print the current letter
}
