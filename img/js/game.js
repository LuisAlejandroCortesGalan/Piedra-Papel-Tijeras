// JUEGO DE PIEDRA PAPEL O TIJERAS
// VERSION 0.1

let mensajeInicial = `
PIEDRA, PAPEL O TIJERAS
=======================

1 <-- Piedra
2 <-- Papel
3 <-- Tijeras
X <-- Fin del juego

`
// if (eleccionUsuario == "1" || "2" || "3")

let eleccionUsuario = Number(prompt(mensajeInicial));
console.log(typeof(eleccionUsuario));
console.log("Eleccion = ", eleccionUsuario);
//ESTO ES LA ELECCION DEL JUGADOR
if (eleccionUsuario == 1) {
    alert("Has elegido ✊");
} else if (eleccionUsuario == 2) {
    alert("Has elegido 🖐️");
} else if (eleccionUsuario == 3) {
    alert("Has elegido ✌️");
} else {
   alert("¡¡hasta pronto!!");
}
//ESTO ES LA ELECCION DE LA MAQUINA
let eleccionPC = aleatorio(1, 4);
if (eleccionPC) {
    if (eleccionPC == 1) {
        alert("El PC a legido ✊");
    } else if (eleccionPC == 2) {
        alert("El PC a elegido 🖐️");
    } else if (eleccionPC == 3) {
        alert("El PC a elegido ✌️");
    }   
}

//LOGICA DE JUEGO
//AQUI DEFINIMOS PRIMERO EL EMPATE Y EL GANADOR, EL PERDEDOR SERIA LO RESTANTE
if (eleccionPC == eleccionUsuario) {
    alert("¡EMPATE!");
} else if ((eleccionUsuario == 1 && eleccionPC ==3 ) || (eleccionUsuario == 2 && eleccionPC == 1) || (eleccionUsuario == 3 && eleccionPC == 2)) {
    alert("HAS GANADO");
} else {
    alert("HAS PERDIDO");
}


function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//GET RANDOM (1,4) devolvera el numero entre 1 (incluido) y 3.
console.log(aleatorio(1, 4));



