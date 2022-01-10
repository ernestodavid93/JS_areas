// //Este es un comentario

// /* Este es un comentario multilinea
// Pa que sepa
// chido
// */

// var nombre = "Ernesto David";
// var apellidos = "Lopez Guevara"
// var edad = 28;
// // var Perro;
// // var PERRO;


// //alert(perro);  
// console.log(nombre, apellidos, ", edad:", edad);

// alert("Mi nombre es: "+ nombre + " " + apellidos);

// var num1 = 5;
// var num2 = 2;
// var resultado = num1 + num2;

// console.log("El resultado es :" + resultado);

// //Sintaxis basica de una funcion

// function suma(num){
//     return num + num;
// }

// console.log(suma(5));

//Declaracion de funcion

function Saludar(){
    alert("Hola a todos");
}

//Saludar();

//Expresion de funcion

var Cantar = function(){
    alert("Perros");
}

// Cantar();

function sumar(){
    var numero1 = 2;
    var numero2 = 3;
    var suma = numero1 + numero2;
    alert("La suma es: " + suma);
}

//sumar();

//Funcion con parametros

function restar (num1, num2, resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert("La resta es: " + resta);
}

//restar();

function Cuadrado (cuadrado){
    var res = cuadrado * cuadrado;
    alert("El cuadrado del numero es: " + res);
}

//Cuadrado(5);

function Operaciones(num1, num2, num3 , suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert("La suma es: " + suma + ", La resta es: " + resta + ", La multiplicacion: " + multi);
}

//Operaciones(2, 2, 2);

function Prompter(){
    var respuesta = prompt('Buenos dias chaval');
    alert("Es un gusto saldarte " + respuesta);
}

//Prompter();

function Cuadrado(){
    var respuesta = prompt('Cual es el lado del cuadrado');
    var res = respuesta * respuesta;
    alert("El area del cuadrado es: " + res);
}

//Cuadrado();

function confirmacion(){
    var pregunta = confirm("Deseas ver perros");
    if(pregunta){
        alert("Aqui");
        window.location = "https:www.google.com";
    }
    else{
        alert("tons que quieres?");
    }
}

function color(){
    var elem = document.getElementById('hola');
    elem.style.color = 'blue';
}

function ocultar(){
    var oc = document.getElementById('ocultar');
    oc.style.display = 'none';
}

function aparecer(){
    var oc = document.getElementById('ocultar');
    oc.style.display = 'block';
}