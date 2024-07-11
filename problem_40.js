//service fee and sales tax
/*
a restaurant changes 10% services fee and 16% sales tax.
=> write a program to read a BillValue and add service fee and sales tax to it 
and print the TotallBill on the screen
example:
input => 100
output =>127.6
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTotalBill() {
    rl.question('Enter the BillValue: ', (billValueInput) => {
        const billValue = parseFloat(billValueInput);

        let totalBill = billValue * 1.1; // Add 10% service fee.
        totalBill = totalBill * 1.16; // Add 16% sales tax.

        console.log(`The TotalBill is: ${totalBill.toFixed(2)}`); // Print the total bill rounded to 2 decimal places.

        rl.close();
    });
}

calculateTotalBill();


