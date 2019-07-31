'use strict'

// show all divisor of a number

var num1 = parseInt(prompt("Ingrese numer"), 0);
var divisor = 1;

while (divisor <= num1) {
    if(num1%divisor === 0)
    {
        console.log(divisor);
    }
    divisor++;
}