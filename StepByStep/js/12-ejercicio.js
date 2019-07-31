'use strict'

var num = 0;
var sum = 0;
var cont = 0;

while(num >= 0)
{
    num = parseInt(prompt("Digite numero"), 0);
    if (isNaN(num)) 
        num = 0;

    sum += num;
    cont++;
}

alert("El promedio es:" + sum);
alert("El promedio es:" + (sum/cont));