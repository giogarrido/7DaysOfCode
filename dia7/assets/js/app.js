// operaciones disponibles para una calculadora
 let operacionesdisponibles = ['Suma', 'Resta', 'Multiplicación', 'División', 'Salir'];

 let operacionSelect = document.getElementById('operacionSelect');
 let primerNumeroInput = document.getElementById('primerNumeroInput');
 let segundoNumeroInput = document.getElementById('segundoNumeroInput');
 let resultado = document.getElementById('resultado');




// Función para llenar el combo box con las operaciones disponibles

function LlenarOperacionesDisponibles() {
    operacionesdisponibles.forEach((operacion, index) => {
        let option = document.createElement('option');
        option.value = index; // Usar el índice como valor
        option.textContent = operacion;
        operacionSelect.appendChild(option);
    });
}

// Función para realizar la operación seleccionada
function RealizarOperacion() {
    let primerNumero = parseFloat(primerNumeroInput.value);
    let segundoNumero = parseFloat(segundoNumeroInput.value);
    let operacion = operacionSelect.value;

    switch (operacion) {
        case '0':
            resultado.value = primerNumero + segundoNumero;
            break;
        case '1':
            resultado.value = primerNumero - segundoNumero;
            break;
        case '2':
            resultado.value = primerNumero * segundoNumero;
            break;
        case '3':
            resultado.value = primerNumero / segundoNumero;
            break;
        case '4':
            // cambiar titulo
            document.getElementById('titulo').textContent = 'Hasta la próxima';
            break;
        default:
            alert('Operación no válida');
            break;
    }
}


// funcion de inicio
 function Inicio() {
    LlenarOperacionesDisponibles();
    primerNumeroInput.value = '';
    segundoNumeroInput.value = '';
    resultado.value = '';
    document.getElementById('titulo').textContent = 'Calculadora';
}


Inicio();



