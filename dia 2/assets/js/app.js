let nameUser ="";
let age = 0;
let programmingLanguage = "";
let message = "";


nameUser = prompt("¿Cuál es tu nombre?");
age = prompt("¿Cuántos años tienes?");
programmingLanguage = prompt("¿Qué lenguaje de programación estas estudiando?");


message = `Hola ${nameUser}, tienes ${age} años y ya estás aprendiendo ${programmingLanguage}!`;

// despliega un mensaje como alerta
alert(message);

// despliega un mensaje en el documento
document.getElementById("message").innerHTML = message;