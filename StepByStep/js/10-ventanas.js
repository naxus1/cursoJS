'use strict';

//Alert
alert("Esta es mi alerta");

//Alertas de confimración
var mi_resultado = confirm("Estas seguro de querer continuar");
if (mi_resultado) {
    alert("Aceptaste");   
}

//Ventana de datos
var a = prompt("Texto", "Digita");
console.log(a);
console.log(typeof(a));
console.log(typeof(parseInt(a)));