//loan installement months
/*
=> write a program to read a LoanAmount and MonthlyPayment
and calculate how many months you need to settle the loan
example input =>LoanAmount = 5000  MonthlyPayment = 500
output => 10 Months
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateLoanMonths(loanAmount, monthlyPayment) {
    const months = loanAmount / monthlyPayment;
    return months;
}

rl.question('Enter the Loan Amount: ', (loanAmountInput) => {
    const loanAmount = parseFloat(loanAmountInput);

    rl.question('Enter the Monthly Payment: ', (monthlyPaymentInput) => {
        const monthlyPayment = parseFloat(monthlyPaymentInput);

        if (monthlyPayment === 0) {
            console.log("Monthly payment cannot be zero.");
            rl.close();
            return;
        }

        const months = calculateLoanMonths(loanAmount, monthlyPayment);
        console.log(`You need ${months} months to settle the loan.`);
        rl.close();
    });
});
