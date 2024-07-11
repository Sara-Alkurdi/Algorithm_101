//ATM PIN
/*
=>write a program to read the ATM PIN code from
the user
 then check if PIN code=1234,
 then show the balance to user
 otherwise print "Wrong PIN" and ask the user to enter the PIN again
 assume user balance is 7500
 input => 1234   5151
 output => your balance is 7500      Wrong PIN 
 */

 const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctPIN = 1234;
const userBalance = 7500;

function askForPIN() {
    rl.question('Enter your ATM PIN: ', (input) => {
        const enteredPIN = parseInt(input, 10);

        if (enteredPIN === correctPIN) {
            console.log(`Your balance is: ${userBalance}`);
            rl.close();
        } else {
            console.log("Wrong PIN");
            askForPIN();
        }
    });
}

askForPIN();
