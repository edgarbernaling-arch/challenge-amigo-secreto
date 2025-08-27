// Arreglo para ir almacenadando el nombre de los amigos
let amigos = [];
// Esta es la función para agregar amigos
function agregarAmigo () {
    let nombre = document.getElementById("nombreAmigo").value;//Obtiene el valor del campo de texto
    if (nombre.trim() !== "") { //verificar que el nombre no este vacio
        amigos.push(nombre);//si es valido lo agrega a nuestro arreglo
        console.log(nombre);//muestra el valor ingresado en la consola
        actualizarListaDeAmigos();//asi mostrar el nuevo nombre en la pagina
        document.getElementById("nombreAmigo").value = "";
    } else {
        alert("Ingresar un nombre valido");
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
