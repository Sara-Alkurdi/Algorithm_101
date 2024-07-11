//Day of week
/*
=>Write a program to ask the user to enter :
.Day
=>then print the day as follows:
.1 print Sunday
.2 print Monday 
.3 print Tuesday 
.4 print Wednesday 
.5 print Thursday 
.6 print Friday 
.7 print Saturday 
otherwise print "Wrong Day" and ask the user to enter the day again
example input => 6
output => It's Friday
*/ 

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   function getDay() {
//     readline.question('Enter a day number: ', (day) => {
//       const dayNumber = parseInt(day);
  
//       if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
//         console.error('Wrong Day. Please enter a number between 1 and 7.');
//         getDay();
//       } else {
//         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         console.log(`It's ${days[dayNumber - 1]}`);
//         readline.close();
//       }
//     });
//   }
  
//   getDay();


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForDay() {
    rl.question('Enter a day number (1-7): ', (input) => {
        const day = parseInt(input, 10);

        switch (day) {
            case 1:
                console.log("It's Sunday");
                rl.close();
                break;
            case 2:
                console.log("It's Monday");
                rl.close();
                break;
            case 3:
                console.log("It's Tuesday");
                rl.close();
                break;
            case 4:
                console.log("It's Wednesday");
                rl.close();
                break;
            case 5:
                console.log("It's Thursday");
                rl.close();
                break;
            case 6:
                console.log("It's Friday");
                rl.close();
                break;
            case 7:
                console.log("It's Saturday");
                rl.close();
                break;
            default:
                console.log("Wrong Day. Please enter a number between 1 and 7.");
                askForDay();
        }
    });
}

// Start the process
askForDay();

  