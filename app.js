let amigo = []; //Arreglo para almacenar los nombres

function agregarAmigo() { // Función para implementar amigos
    let nombre = document.getElementById('nombreAmigo').value;
    amigo.push(nombre);
    console.log(nombre);
}
