//seconds to days, hours, minutes, seconds
/*
=>write a program that inputs the number of seconds 
and changes it to days, hours, minutes and seconds
example input => 193535 
output => 2:5:45:35
 *///seconds to days, hours, minutes, seconds
/*
=>write a program that inputs the number of seconds 
and changes it to days, hours, minutes and seconds
example input => 193535 
output => 2:5:45:35
 */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertSecondsToDHMS(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${days}:${hours}:${minutes}:${remainingSeconds}`;
}

rl.question('Enter the number of seconds: ', (input) => {
    const seconds = parseInt(input, 10);
    if (isNaN(seconds) || seconds < 0) {
        console.log("Please enter a valid positive number of seconds.");
    } else {
        const result = convertSecondsToDHMS(seconds);
        console.log(result);
    }
    rl.close();
});
