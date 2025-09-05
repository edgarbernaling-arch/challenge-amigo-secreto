// Arreglo para ir almacenadando el nombre de los amigos
let amigos = [];
function agregarAmigo () {
    let nombre = document.getElementById("nombreAmigo").value;
    // Expresión regular para validar que el nombre solo contiene letras (sin espacios)
    let soloLetrasRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/; //No se pueden ingresar números ni espacios

    if (nombre.trim() === "") { //Ingresar informacion
        alert("Por favor, ingrese un nombre válido.");
    } else if (!soloLetrasRegex.test(nombre)) { //Solo ingresar letras
        alert("Por favor, ingrese letras sin espacios ni números."); // Mensaje de alerta actualizado
    } else {
        amigos.push(nombre);
        console.log(nombre);
        actualizarListaDeAmigos();
        document.getElementById("nombreAmigo").value = "";
    }
}

//Esta funcion es para actualizar la lista de amigos
function actualizarListaDeAmigos() { //Sincoriniza lo que esta en el arreglo
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = ""; //borra todos los elementos de la lista HTML
    for (let i=0 ; i<amigos.length; i++) { //Recorre cada nombre en el arreglo
        let li = document.createElement("li"); // Crea un nuevo elemento de la lista, se añade a lista visible
        li.textContent = amigos[i]; 
        lista.appendChild (li);
    }
}

// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return; 
    }
    
    // Selecciona un índice aleatorio del arreglo de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre del amigo secreto usando el índice aleatorio
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia los resultados anteriores

    // Muestra el nombre del amigo secreto en un solo párrafo
    resultado.innerHTML = `<p>El amigo secreto es: ${amigoSecreto}</p>`;
}
