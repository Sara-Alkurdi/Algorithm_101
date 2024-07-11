//pay remainder
/*
=>write a program to read a TotallBill and CashPaid 
calculate the remainder to be paid back
example input=> prix:20 paid:50
output => 30
 */

const readline = require('readline');

// Create an interface to read lines from the input and output streams.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to read TotalBill and CashPaid, calculate the remainder, and print it.
function calculateRemainder() {
    rl.question('Enter the TotalBill: ', (totalBillInput) => {
        const totalBill = parseFloat(totalBillInput); // Parse the TotalBill input as a float.

        rl.question('Enter the CashPaid: ', (cashPaidInput) => {
            const cashPaid = parseFloat(cashPaidInput); // Parse the CashPaid input as a float.

            const remainder = cashPaid - totalBill; // Calculate the remainder.
            console.log(`The remainder to be paid back is: ${remainder}`); // Print the remainder.

            rl.close(); // Close the readline interface.
        });
    });
}

// Call the function to start the process.
calculateRemainder();
