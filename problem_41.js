//weeks and days
/*
=> write a program to read a NumberOfHours and calculate the number of weeks
 and days included in that number
  example input => 365
  output => 2.17 weeks  15.20 days
  */

  const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateWeeksAndDays() {
    rl.question('Enter the NumberOfHours: ', (hoursInput) => {
        const numberOfHours = parseFloat(hoursInput);

        // Calculate the number of days
        const days = numberOfHours / 24;

        // Calculate the number of weeks
        const weeks = days / 7;

        console.log(`${weeks.toFixed(2)} weeks and ${days.toFixed(2)} days`);

        rl.close();
    });
}

calculateWeeksAndDays();






