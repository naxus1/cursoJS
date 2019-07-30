'use strict'

//use of Rest Spread

function frutas(frut1, frut2, ...rest_frut)
{
    console.log("Fruta1", frut1);
    console.log("Fruta2", frut2);
    console.log("Resto de frutas", rest_frut);
}

var mis_frutas =["Mandarina"]; 
frutas(...mis_frutas, "Guayaba", "melon", "Piña");