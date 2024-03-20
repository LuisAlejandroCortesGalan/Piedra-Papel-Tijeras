let formulario = document.getElementById('formulario');
let eleccionUsuario = "";
let guardarResultado = document.getElementById('resultado');
let mostrar = '';
let img = '';
let audio = '';

//marcador

let ganadas = 0;
let perdidas = 0;
let empates = 0;

//aqui declaro la funcion game (enlazada al boton con un onclick)
function game() {

for (let i = 0; i < formulario.length; i++) { //aqui hago un bucle para buscar el value del radio elegido
    if (formulario[i].checked) 
    eleccionUsuario = formulario[i].value;
}

//aqui creo una funcion que cree numeros aleatorios del PC 1,2,3 
//GET RANDOM (1,4) devolvera el numero entre 1 (incluido) y 3(incluido).
function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//aqui creamos la eleccion aleatoria del PC, enlazando 1,2,3 a piedra, papel y tijeras
let eleccionPC = aleatorio(1, 4);
if (eleccionPC) {
    if (eleccionPC == 1) {
        eleccionPC = "piedra";
    } else if (eleccionPC == 2) {
        eleccionPC = "papel"; 
    } else if (eleccionPC == 3) {
        eleccionPC = "tijeras"; 
    }   
}

// console.log("el pc elige:", eleccionPC);
// console.log("el usuario elige:", eleccionUsuario);



var mensajeElement = document.createElement('p');
mensajeElement.textContent = "Has ganado!";

var imagenElement = document.createElement('img');
imagenElement.src = "copa_500px.jpg";

var audioElement = document.createElement('audio');
audioElement.src = "assets/aplausos.mp3";
audioElement.autoplay = true;


if (eleccionPC == eleccionUsuario) {
    mostrar = '<p>Has empatado!</p>';
    img = '<img src="estrecharme-mano_500px.jpg">'
    audio = '<audio src="assets/alarma.mp3" autoplay></audio>'
    console.log("empate!!");
    guardarResultado.innerHTML += mostrar + img + audio;
    empates++;
} else if (eleccionUsuario == "piedra" && eleccionPC == "tijeras" || eleccionUsuario == "papel" && eleccionPC == "piedra" || eleccionUsuario == "tijeras" && eleccionPC == "papel") {
    mostrar = '<p>Has ganado!</p>'
    img = '<img src="copa_500px.jpg">'
    audio = '<audio src="assets/aplausos.mp3" autoplay></audio>'
    console.log("ganamos!!!!");
    guardarResultado.innerHTML += mostrar + img + audio;
    ganadas++;
} else if (eleccionUsuario == "piedra" && eleccionPC == "papel" || eleccionUsuario == "tijeras" && eleccionPC == "piedra" || eleccionUsuario == "papel" && eleccionPC == "tijeras") {
    mostrar = '<p>Has perdido!</p>'
    img = '<img src="malament_500px.jpg">'
    audio = '<audio src="assets/gameover.mp3" autoplay></audio>'
    console.log("perdemos!!!!");
    guardarResultado.innerHTML += mostrar + img + audio;
    perdidas++;
}


let marcador = `<p> Victorias : ${ganadas} | Empates : ${empates} | Derrotas : ${perdidas} </p>`
guardarResultado.innerHTML = marcador;



}

function reiniciar() {
    // console.log("REINICIAR FUNCIONA");
    ganadas = 0;
    perdidas = 0;
    empates = 0;
    let marcador = `<p> Victorias : ${ganadas} | Empates : ${empates} | Derrotas : ${perdidas} </p>`
    guardarResultado.innerHTML = marcador;
}