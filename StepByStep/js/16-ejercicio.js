'use strict'

// indicate if a number is odd and even

var num1 = parseInt(prompt("Enter number:", 0));

while (num1 < 0 || isNaN(num1))
{
    num1 = parseInt(prompt("Enter number:", 0));
}

if(num1 % 2 === 0)
{
    console.log("The number is odd");
}
else
{
    console.log("The number is even");
}