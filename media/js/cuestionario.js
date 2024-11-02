function valuap(respuest) {
  var reto;
  if (parseInt(respuest) == this.correcta) {
    // var reto;
    alert("Es correcta");
    reto = true;
    return reto;
  } else {
    alert("Es false");
    return reto;
  }
}

function pregunta(
  pregun,
  respuesta1,
  respuesta2,
  respuesta3,
  respuesta4,
  correcta
) {
  this.pregun = pregun;
  this.respuestas = [];
  this.respuestas[0] = respuesta1;
  this.respuestas[1] = respuesta2;
  this.respuestas[2] = respuesta3;
  this.respuestas[3] = respuesta4;
  this.correcta = parseInt(correcta);
  this.ocupado = false;
  this.valuap = valuap;
}

var retorno = [];
var preguntas = [];

preguntas[0] = new pregunta(
  "¿Quienes intervienen en la obtención de requisitos?",
  "Desarrolladores, clientes, usuarios, etc.",
  "Solo los desarrolladores.",
  "Exlusivamente los clientes.",
  "Únicamente los usuarios finales.",
  0
);
preguntas[1] = new pregunta(
  "¿Qúe se toma como punto de partida en 'Diseño de Softsware'?",
  "Requisitos funcionales y no funcionales",
  "Las tecnologías disponibles en el mercado.",
  "La opinión de los inversores.",
  "Solo los requisitos de rendimiento.",
  0
);
preguntas[2] = new pregunta(
  "¿En diseño de software que aspectos se toman en cuenta?",
  "Técnicos, calidad, coste y plazos.",
  "Exclusivamente la experiencia del usuario.",
  "Únicamente el coste y el tiempo de entrega.",
  "Solo los requerimientos funcionales.",
  0
);
preguntas[3] = new pregunta(
  "¿Qué actividades se engloban en la construcción de software?",
  "Solo la documentación del software.",
  "Codificación, verificación de código, etc.",
  "Exclusivamente el diseño de la interfaz.",
  "La planeación del proyecto, pero no la codificación.",
  1
);
preguntas[4] = new pregunta(
  "¿Qué comprueba la etapa de pruebas de software?",
  "Solo la velocidad de desarrollo del software.",
  "La calidad del software.",
  "La satisfacción del cliente, sin evaluar la calidad",
  "Exclusivamente la documentación del proyecto.",
  1
);
preguntas[5] = new pregunta(
  "¿De quién se toman en cuenta los errores en la etapa de pruebas de software?",
  "Solo de los desarrolladores",
  "De todos los implicados en el desarrollo de software.",
  "Exclusivamente de los usuarios finales.",
  "Únicamente de los testers.",
  1
);
preguntas[6] = new pregunta(
  "¿Por qué se dirige el mantenimiento?",
  "Normas de diseño gráfico.",
  "Los comentarios de los usuarios en redes sociales",
  "Contratos",
  "La intuición del desarrollador",
  2
);
preguntas[7] = new pregunta(
  "¿Cuándo se hace el mantenimiento de software?",
  "Solo durante la fase de pruebas",
  "Antes de la entrega final.",
  "Post-entrega.",
  "Durante la fase de diseño.",
  2
);
preguntas[8] = new pregunta(
  "¿Cuál es la disciplina que ayuda a identificar y documentar las características físicas y funcionales de los elementosde configuración?",
  "Pruebas de software.",
  "Análisis de requisitos.",
  "Gestión de la configuración de software.",
  "Desarrollo ágil de software.",
  2
);
preguntas[9] = new pregunta(
  "¿Qué se usa para construir un software de calidad?",
  "Solo el conocimiento técnico del equipo.",
  "Herramientas de diseño gráfico",
  "La creatividad individual del programador",
  "Procesos pre establecidos y controlados.",
  3
);
preguntas[10] = new pregunta(
  "¿Cuál es la definición de subgrupo?",
  "Un subconjunto que es un grupo en sí mismo",
  "Un subconjunto que es un semigrupo en sí mismo",
  "Un subconjunto que es un monoide en sí mismo",
  "Un subconjunto que es un homomorfismo en sí mismo",
  3
);
preguntas[11] = new pregunta(
  "¿Qué es un grupo abeliano?",
  "Un grupo conmutativo",
  "Un grupo no conmutativo",
  "Un grupo con elementos inversos",
  "Un grupo sin elementos inversos",
  3
);
