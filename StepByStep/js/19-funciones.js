'use strict'

//Functions
// a function is a group of reusable instructions.

function calculator(num1, num2)
{
    console.log("Suma " + (num1 + num2));
    console.log("Multiplicacion " + (num1 * num2));
    console.log("resta " + (num1 - num2));
    console.log("Division " + (num1 / num2));
    console.log("+********************+");
}

for(var i = 1; i < 10; i++)
{
    console.log(i);
    calculator(i, 8);
}

