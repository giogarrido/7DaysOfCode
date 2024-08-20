let front =false;
let back = false;
let area = 0;
let fullstack = 0;
let techLearn = 0;
let technologies = [];
let technoLike = [];
let addTechnologies = true;
let message = "";
let message2 = "";


while (front == false && back == false){
    area = prompt("¿Que area te gustaría seguir? Responde con el número 1 para Front-End o 2 para Back-End");
    if(area == 1){
        front = true;
    }
    else if(area == 2){
        back = true;
    }
    else{
        alert("Opción no válida");
    }

}

if(front == true){
    technologies.push("Front-End");
    technologies.push("React");
    technologies.push("Vue");
}

if(back == true){
    technologies.push("Back-End");
    technologies.push("C#");
    technologies.push("Java");
}

techLearn = prompt(`¿Qué tecnología te gustaría aprender? Responde con el número 1 para ${technologies[1]} o 2 para ${technologies[2]}`);

fullstack = prompt(`¿Te gustaría ser desarrollador Full-Stack [1]? o prefieres especializarte en ${technologies[0]} [2]`);

while(addTechnologies == true){
    technoLike.push(prompt("¿Qué tecnología te gustaría especializarte?"));
    alert(`Me parece que ${technoLike[(technoLike.length)-1]} es una excelente opción!`);
    addTechnologies = confirm("¿Quieres agregar otra tecnología?");
}
    

message = `Veo que te gusta el area de ${technologies[0]} y te gustaría aprender ${technologies[techLearn]}`;
message2 = `Además, te gustaría especializarte en ${technoLike.join(", ")} y ${fullstack == 1 ? "ser un desarrollador Full-Stack" : `especializarte en ${technologies[0]}`}`;

// // despliega un mensaje en el documento
 document.getElementById("message").innerHTML = message;

// // despliega un mensaje en el documento
 document.getElementById("message2").innerHTML = message2;