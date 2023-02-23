// Declaracion de boton de eventos
const boton = document.querySelector("button");
const Start = () => {
  devuelveNumero();
  devuelvePinta();
}

function devuelveNumero() {
  let numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let positionNumero = (Math.floor(Math.random() * numero.length));

  if (positionNumero == 8 ) {   // condicion para mejorar la posicion del numero 10
    document.getElementById("numero").style.left = "32%";
  }else if (positionNumero < 8 || positionNumero > 8) {   // condicion para mejorar la posicion del numero 10
    document.getElementById("numero").style.left = "38%";
  }
  document.getElementById("numero").innerHTML = numero[positionNumero];
}

function devuelvePinta() {
  let pinta = ['♦', '♥', '♠', '♣'];
  let positionPinta = (Math.floor(Math.random() * pinta.length));

  if (pinta[positionPinta] === '♦' || pinta[positionPinta] === '♥') {   //Condicion para escoger el color de la pinta
    document.getElementById("pintaizquierda").style.color = "red";
    document.getElementById("pintaderecha").style.color = "red";
  } else {
    document.getElementById("pintaizquierda").style.color = "black";
    document.getElementById("pintaderecha").style.color = "black";
  }
  document.getElementById("pintaizquierda").innerHTML = pinta[positionPinta];
  document.getElementById("pintaderecha").innerHTML = pinta[positionPinta];
}

Start();

boton.addEventListener("click", () => {
  devuelveNumero();
  devuelvePinta();
});






