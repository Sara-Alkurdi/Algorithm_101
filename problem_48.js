//monthly loan installement
/*
=> write a program to read a LoanAmount and ask you how
many months you need to settle the loan 
then calculate the monthly installement amount
example input => 5000 10
output => 500 
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Loan Amount: ', (loanAmount) => {
    rl.question('Enter number of months to settle the loan: ', (months) => {
        const loan = parseFloat(loanAmount);
        const numMonths = parseInt(months, 10);

        if (isNaN(loan) || isNaN(numMonths) || loan <= 0 || numMonths <= 0) {
            console.log("Please enter valid positive numbers for both Loan Amount and number of months.");
        } else {
            const monthlyInstallment = loan / numMonths;
            console.log(`The monthly installment amount is: ${monthlyInstallment.toFixed(2)}`);
        }

        rl.close();
    });
});
