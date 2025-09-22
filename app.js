


// Aquí guardo los nombres de los amigos
let listaDeAmigos = [];

// Esta función agrega los amigos a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Debes añadir un nombre válido.");
        return;
    }
    if (listaDeAmigos.indexOf(nombre) === -1) {
        listaDeAmigos.push(nombre);
        mostrarListaAmigos();
        input.value = "";
    } else {
        alert("Este amigo ya está en la lista.");
    }
}

// Muestra la lista de amigos en la página
function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

// Sortea un amigo secreto y lo muestra
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let elegido = listaDeAmigos[indice];
    document.getElementById('resultado').innerHTML = "<li>El amigo secreto es: " + elegido + "</li>";
}

// Limpia la lista y el resultado
function limpiarLista() {
    listaDeAmigos = [];
    mostrarListaAmigos();
    document.getElementById('resultado').innerHTML = "";
}