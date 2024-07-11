//ATM PIN
/*
=> Write a program to read ATM PIN code from the user 
then check if PIN code = 1234
then show the balance to the user
otherwise print "Wrong PIN" anf ask the user to enter the PIN again
only allow user to enter the PIN 3 times 
if fails print "card is locked"
assume user balance is 7500
example input => 1234   5151
output => your balance is 7500   wrong PIN
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctPIN = 1234;
const userBalance = 7500;
let attempts = 0;
const maxAttempts = 3;

function askForPIN() {
    rl.question('Enter your ATM PIN: ', (input) => {
        const enteredPIN = parseInt(input, 10);
        attempts++;

        if (enteredPIN === correctPIN) {
            console.log(`Your balance is: ${userBalance}`);
            rl.close();
        } else if (attempts < maxAttempts) {
            console.log("Wrong PIN");
            askForPIN();
        } else {
            console.log("Card is locked");
            rl.close();
        }
    });
}

askForPIN();
