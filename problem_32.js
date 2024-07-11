//Power of M
/*
=>Write a program to ask the user to enter:
.Number=> 2  2
.M=> 4  100
=> then print Number^M 
examples: 
Input=> 2^4
Output=> 16
*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculatePower(base, exponent) {
//     const result = Math.pow(base, exponent);
//     console.log(`${base}^${exponent} = ${result}`);
// }

// readline.question('Enter the base number: ', (baseInput) => {
//     const base = parseFloat(baseInput); // Convert input to a number

//     if (isNaN(base)) {
//         console.error('Invalid base number. Please enter a valid number.');
//         readline.close();
//         return;
//     }

//     readline.question('Enter the exponent: ', (exponentInput) => {
//         const exponent = parseFloat(exponentInput); // Convert input to a number

//         if (isNaN(exponent)) {
//             console.error('Invalid exponent. Please enter a valid number.');
//         } else {
//             calculatePower(base, exponent);
//         }

//         readline.close();
//     });
// });



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculatePower(base, exponent) {
    let p = 1;
    let counter = 0;

    if (exponent === 0) {
        p = 1;
    } else {
        while (counter < exponent) {
            p *= base;
            counter++;
        }
    }

    console.log(`${base}^${exponent} = ${p}`);
}

function promptForExponent(base) {
    readline.question('Enter the exponent: ', (exponentInput) => {
        const exponent = parseInt(exponentInput);

        if (isNaN(exponent) || exponent < 0) {
            console.error('Invalid exponent. Please enter a non-negative integer.');
            promptForExponent(base);
        } else {
            calculatePower(base, exponent);
            readline.close();
        }
    });
}

readline.question('Enter the base number: ', (baseInput) => {
    const base = parseInt(baseInput);

    if (isNaN(base)) {
        console.error('Invalid base number. Please enter an integer.');
        readline.close();
    } else {
        promptForExponent(base);
    }
});
