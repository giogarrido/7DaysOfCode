let nameUser ="";
let age = 0;
let programmingLanguage = "";
let message = "";
let message2 = "";
let option = 0;


nameUser = prompt("¿Cuál es tu nombre?");
age = prompt("¿Cuántos años tienes?");
programmingLanguage = prompt("¿Qué lenguaje de programación estas estudiando?");


message = `Hola ${nameUser}, tienes ${age} años y ya estás aprendiendo ${programmingLanguage}!`;

// despliega un mensaje como alerta
alert(message);

option = prompt(`¿Te gusta estudiar ${programmingLanguage}? Responde con el número 1 para Sí o 2 para No`);

if(option == 1){
    message2 = "¡Muy bien! Sigue estudiando y tendrás mucho éxito!";
}
else if(option == 2){
    message2 = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
}
else{
    message2 = "Opción no válida";
}

// despliega un mensaje en el documento
document.getElementById("message").innerHTML = message;

// despliega un mensaje en el documento
document.getElementById("message2").innerHTML = message2;