'use strict'

//make a calculator.

var number1 = parseInt(prompt("Enter a number: ", 0));
var number2 = parseInt(prompt("Enter a number: ", 0));

while (number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)) 
{
    number1 = parseInt(prompt("Enter a number: ", 0));
    number2 = parseInt(prompt("Enter a number: ", 0));
}


var resultado = number1 + "+" + number2 + " = " + (number1+number2) + "<br>" +
                number1 + "*" + number2 + " = " + (number1*number2) + "<br>" +
                number1 + "-" + number2 + " = " + (number1-number2) + "<br>" +
                number1 + "/" + number2 + " = " + (number1/number2) + "<br>";


var resultado2 = number1 + "+" + number2 + " = " + (number1+number2) + "\n" +
number1 + "*" + number2 + " = " + (number1*number2) + "\n" +
number1 + "-" + number2 + " = " + (number1-number2) + "\n" +
number1 + "/" + number2 + " = " + (number1/number2) + "\n";                

                document.write(resultado);
console.log(resultado2);
alert(resultado2);


