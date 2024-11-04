const preguntas = [
  {
    pregunta: "¿Cómo define el IEEE el diseño de software en IEEE 610.12-90?",
    opciones: [
      "Como el proceso de prueba de software",
      "Como el proceso de definir la arquitectura, componentes, interfaces y otras características de un sistema o componente",
      "Como el proceso de gestión de requisitos",
    ],
    correcta: 1,
  },
  {
    pregunta:
      "¿Cuál es el propósito de la subárea de Fundamentos del Diseño del Software en SWEBOK?",
    opciones: [
      "Proporcionar una base para entender el rol y el ámbito del diseño del software",
      "Enseñar cómo implementar código en varios lenguajes de programación",
      "Describir los pasos para probar un sistema",
    ],
    correcta: 0,
  },
  {
    pregunta:
      "¿Qué tema NO está incluido en la subárea de Temas Clave en el Diseño del Software?",
    opciones: [
      "Concurrencia",
      "Control y manejo de eventos",
      "Diseño de interfaces de usuario",
    ],
    correcta: 2,
  },
  {
    pregunta:
      "¿Qué se analiza en la subárea de Calidad del Diseño del Software en SWEBOK?",
    opciones: [
      "Atributos de calidad, análisis de calidad y técnicas de evaluación y medición",
      "Estrategias para implementar algoritmos eficientes",
      "Técnicas para mejorar la experiencia del usuario",
    ],
    correcta: 0,
  },
  {
    pregunta:
      "¿En qué se dividen las Notaciones del Diseño del Software según SWEBOK?",
    opciones: [
      "Estructuras arquitecturales y puntos de vista",
      "Descripciones estructurales y de comportamiento",
      "Métodos funcionales y basados en componentes",
    ],
    correcta: 1,
  },
];

let preguntaIndice = 0;
let puntaje = 0;

function comenzarCuestionario() {
  document.getElementById("ventanaEncuesta").style.display = "block";
  document.getElementById("InstruccionesPrograma").style.display = "none";
  document.getElementById("botonComenzar").style.display = "none";
  document.getElementById("botonSiguiente").style.display = "block";
  cargarPregunta();
}

function cargarPregunta() {
  const pregunta = preguntas[preguntaIndice];
  document.getElementById(
    "preguntaActual"
  ).innerHTML = `<p>${pregunta.pregunta}</p>`;
  document.getElementById("opciones").innerHTML = pregunta.opciones
    .map(
      (opcion, index) =>
        `<label><input type="radio" name="opcion" value="${index}"> ${opcion}</label><br>`
    )
    .join("");
}

function siguientePregunta() {
  const seleccion = document.querySelector('input[name="opcion"]:checked');
  if (seleccion) {
    if (parseInt(seleccion.value) === preguntas[preguntaIndice].correcta) {
      puntaje++;
    }
    preguntaIndice++;
    if (preguntaIndice < preguntas.length) {
      cargarPregunta();
    } else {
      mostrarResultados();
    }
  } else {
    alert("Por favor, selecciona una respuesta.");
  }
}

function mostrarResultados() {
	const resultadoHTML = `<h2>Resultado</h2><p>Tu puntuación es ${puntaje} de ${preguntas.length}.</p>`;
	document.getElementById("preguntaActual").innerHTML = resultadoHTML;
	document.getElementById("opciones").innerHTML = ''; // Limpiar opciones
  document.getElementById("botonSiguiente").style.display = "none";
	document.getElementById("botonReiniciar").style.display = "inline-block"; // Muestra el botón "Reiniciar"
}


function reiniciarCuestionario() {
	preguntaIndice = 0;
	puntaje = 0;
	document.getElementById("botonReiniciar").style.display = "none"; // Oculta el botón "Reiniciar"
	document.getElementById("ventanaEncuesta").style.display = "none";
	document.getElementById("InstruccionesPrograma").style.display = "block";
	document.getElementById("botonComenzar").style.display = "inline-block"; // Vuelve a mostrar el botón "Comenzar"
}