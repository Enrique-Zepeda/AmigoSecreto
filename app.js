// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

const agregarAmigo = () => {
  let input = document.querySelector("#amigo");
  document.getElementById("resultado").innerHTML = "";
  let valor = input.value;
  if (valor.trim() !== "") {
    amigos.push(valor);

    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = valor;
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor, inserte un nombre");
  }
};

const sortearAmigo = () => {
  if (amigos.length === 0) {
    console.log("No hay amigos en la lista.");
    return;
  } else {
    document.getElementById("listaAmigos").innerHTML = "";
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio]; // Obtener el amigo en esa posición

    console.log("El amigo seleccionado es:", amigoSeleccionado);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
  }
};
