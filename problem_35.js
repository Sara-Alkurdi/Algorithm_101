//piggy bank calculator
/*
=> Write a program to ask the user to enter:
Pennies, Nickel, Dime, Quarters, Dollars
=>then calculate the total pennies, total dollars and print them on screen giving that:
.Penny = 1
.Nickel = 5
.Dime =10
.Quarter = 25
.Dollar = 100

Example:
input => 5, 5, 5, 5, 5
output => 705 pennies  and 7.05 dollars
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTotal(pennies, nickels, dimes, quarters, dollars) {
    const pennyValue = 1;
    const nickelValue = 5;
    const dimeValue = 10;
    const quarterValue = 25;
    const dollarValue = 100;

    const totalPennies = (pennies * pennyValue) +
                         (nickels * nickelValue) +
                         (dimes * dimeValue) +
                         (quarters * quarterValue) +
                         (dollars * dollarValue);

    const totalDollars = totalPennies / 100;

    console.log(`totalPennies is ${totalPennies} pennies`);
    console.log(`totalDollars is ${totalDollars.toFixed(2)} dollars`);
}

function promptUser() {
    readline.question('Enter the number of Pennies: ', (penniesInput) => {
        readline.question('Enter the number of Nickels: ', (nickelsInput) => {
            readline.question('Enter the number of Dimes: ', (dimesInput) => {
                readline.question('Enter the number of Quarters: ', (quartersInput) => {
                    readline.question('Enter the number of Dollars: ', (dollarsInput) => {
                        const pennies = parseInt(penniesInput);
                        const nickels = parseInt(nickelsInput);
                        const dimes = parseInt(dimesInput);
                        const quarters = parseInt(quartersInput);
                        const dollars = parseInt(dollarsInput);

                        if (isNaN(pennies) || isNaN(nickels) || isNaN(dimes) || isNaN(quarters) || isNaN(dollars)) {
                            console.error('Invalid input. Please enter numbers only.');
                        } else {
                            calculateTotal(pennies, nickels, dimes, quarters, dollars);
                        }

                        readline.close();
                    });
                });
            });
        });
    });
}

promptUser();
