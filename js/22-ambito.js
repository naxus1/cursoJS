'use strict'

function saludo()
{
    // create local var
    var variable_local = "Hola desde adentro";
    console.log(bienvenido);
    console.log(variable_local);
}

// Create global var
var bienvenido = "Saludo desde mi variable global";
saludo()
console.log(variable_local);