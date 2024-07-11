//task duration in seconds
/*
=> write a program to calculate the task duration
in seconds and print it on screen
given the time of a task in the number of days,
hours, minutes and seconds
example input => 2, 5, 45, 35
output => 193.535 seconds
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTaskDuration() {
    rl.question('Enter the number of days: ', (daysInput) => {
        const days = parseInt(daysInput, 10);

        rl.question('Enter the number of hours: ', (hoursInput) => {
            const hours = parseInt(hoursInput, 10);

            rl.question('Enter the number of minutes: ', (minutesInput) => {
                const minutes = parseInt(minutesInput, 10);

                rl.question('Enter the number of seconds: ', (secondsInput) => {
                    const seconds = parseInt(secondsInput, 10);

                    // Calculate total duration in seconds
                    const totalSeconds = (days * 24 * 3600) + (hours * 3600) + (minutes * 60) + seconds;

                    console.log(`${totalSeconds} seconds`);

                    rl.close();
                });
            });
        });
    });
}

calculateTaskDuration();
