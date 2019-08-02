'use strict'

var nombre = prompt("Digite su nombre");
var apellido = prompt("Digite su apellido");

var texto = `
    <h1>Los datos ingresados son:</h1>
    <h3>Nombre: ${nombre}</h3>
    <h3>Apellido ${apellido}</h3>
`;

document.write(texto);