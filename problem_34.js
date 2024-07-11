//commission percentage
/*
=>Write a program to ask the user to enter 
.totalSales
the commission is calculated as one percentage * the totalSales amount,
all you need is to decide which percentage to use of the following:
if totalsales >1000000 => the percentage is 1%
if totalsales >500000 && <1000000 => the percentage is 2%
if totalsales >100000 && <500000 => the percentage is 3%
if totalsales >50000 && <100000 => the percentage is 5%
otherwise => the percentage is 0%
Example: input => 110000
output => 3.300
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateCommission(totalSales) {
    let commissionPercentage;

    if (totalSales > 1000000) {
        commissionPercentage = 1;
    } else if (totalSales > 500000 && totalSales <= 1000000) {
        commissionPercentage = 2;
    } else if (totalSales > 100000 && totalSales <= 500000) {
        commissionPercentage = 3;
    } else if (totalSales > 50000 && totalSales <= 100000) {
        commissionPercentage = 5;
    } else {
        commissionPercentage = 0;
    }

    const commissionValue = (totalSales * commissionPercentage) / 100;
    console.log(`The commission value is: $${commissionValue.toFixed(3)}`);
}

readline.question('Enter the total sales: ', (salesInput) => {
    const totalSales = parseFloat(salesInput); // Convert input to a number

    if (isNaN(totalSales) || totalSales < 0) {
        console.error('Invalid total sales. Please enter a positive number.');
    } else {
        calculateCommission(totalSales);
    }

    readline.close();
});
