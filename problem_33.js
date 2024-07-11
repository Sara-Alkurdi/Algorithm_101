//Grade A B C D F
/*
=>Write a program to ask the user to enter:
.grade
=>then check the grade as following:
if grade from 90 to 100 then print A 
if grade from 80 to 89 then print B 
if grade from 70 to 79 then print C 
if grade from 60 to 69 then print D 
if grade from 50 to 59 then print E
otherwise print F
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log('A');
    } else if (grade >= 80 && grade <= 89) {
        console.log('B');
    } else if (grade >= 70 && grade <= 79) {
        console.log('C');
    } else if (grade >= 60 && grade <= 69) {
        console.log('D');
    } else if (grade >= 50 && grade <= 59) {
        console.log('E');
    } else {
        console.log('F');
    }
}

readline.question('Enter the grade: ', (gradeInput) => {
    const grade = parseFloat(gradeInput); // Convert input to a number

    if (isNaN(grade) || grade < 0 || grade > 100) {
        console.error('Invalid grade. Please enter a number between 0 and 100.');
    } else {
        checkGrade(grade);
    }

    readline.close();
});

 
    