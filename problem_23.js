//Circle area => circle described around an arbitrary triangle 
/*
=> write a program to calculate circle area circle described around an arbitrary triangle 
=> then print it on the screen
=> the user should enter : a  b c
Examples inputs : 5 6 7
outputs => 40,088
 */



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function calculateCircumscribedCircleArea(a, b, c) {
    const pi = Math.PI;
  const P = (a + b + c) / 2;//calculate the semi-perimeter
  const T = (a * b * c) / (4 * Math.sqrt(P * (P - a) * (P - b) * (P - c)));//calculate the circumradius
  const T_squared = T * T;//square the circumradius
  const area = pi * T_squared;//calculate the area of the circumscribed circle
  return area;
}

rl.question('Enter the lengths of the sides of the triangle (a b c) separated by space: ', (input) => {
  const [a, b, c] = input.split(' ').map(Number);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log('Invalid input. Please ensure the sides are positive numbers.');
  } else {
    const area = calculateCircumscribedCircleArea(a, b, c);
    console.log(`The area of the circumscribed circle is: ${area.toFixed(3).replace('.', ',')}`);
  }

  rl.close();
});