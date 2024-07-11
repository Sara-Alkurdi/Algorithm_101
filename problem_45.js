//Month of year
/*
=> write a program to enter:
.Month
then print the day as follows:
.1 print January
.2 print February
.3 print March
.4 print April
.5 print May
.6 print June
.7 print July
.8 print August
.9 print September
.10 print October
.11 print November
.12 print December
otherwise print "Wrong Month"
and ask the user to enter the month again
example input => 11
output => November
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForMonth() {
    rl.question('Enter a month number: ', (input) => {
        const month = parseInt(input, 10);

        switch (month) {
            case 1:
                console.log("January");
                rl.close();
                break;
            case 2:
                console.log("February");
                rl.close();
                break;
            case 3:
                console.log("March");
                rl.close();
                break;
            case 4:
                console.log("April");
                rl.close();
                break;
            case 5:
                console.log("May");
                rl.close();
                break;
            case 6:
                console.log("June");
                rl.close();
                break;
            case 7:
                console.log("July");
                rl.close();
                break;
            case 8:
                console.log("August");
                rl.close();
                break;
            case 9:
                console.log("September");
                rl.close();
                break;
            case 10:
                console.log("October");
                rl.close();
                break;
            case 11:
                console.log("November");
                rl.close();
                break;
            case 12:
                console.log("December");
                rl.close();
                break;
            default:
                console.log("Wrong Month.");
                askForMonth();
        }
    });
}

// Start the process
askForMonth();
