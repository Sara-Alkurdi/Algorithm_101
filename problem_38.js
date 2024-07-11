//is prime number?
/*
=> Write a program to read a number and check if it is a prime number or not
note: prime number can only divide on one and on itself
example input => 5 6 3
output => prime not prime prime
 */
//solution 1
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }

// rl.question('Enter numbers separated by spaces: ', (input) => {
//     const numbers = input.split(' ').map(Number);
//     numbers.forEach(num => {
//         if (isPrime(num)) {
//             console.log(`${num} => prime`);
//         } else {
//             console.log(`${num} => not prime`);
//         }
//     });
//     rl.close();
// });



//solution2

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPrime(N) {
    if (N <= 0) {
        console.log("Number must be > 0");
        return;
    }

    let counter = 2;
    const m = Math.round(N / 2);

    while (true) {
        if (N <= counter) {
            console.log("Prime");
            break;
        } else {
            if (N % counter === 0) {
                console.log("Not prime");
                break;
            } else {
                if (counter === m) {
                    console.log("Prime");
                    break;
                } else {
                    counter++;
                }
            }
        }
    }
}

rl.question('Enter a number: ', (input) => {
    const N = parseInt(input, 10);
    checkPrime(N);
    rl.close();
});
