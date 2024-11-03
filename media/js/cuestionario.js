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
  "¿Cuál es el objetivo principal del proyecto SWEBOK?",
  "Proporcionar herramientas de software gratuitas",
  "Crear nuevos lenguajes de programación",
  "Producir software para el sector público",
  "Definir los límites y proporcionar acceso al conocimiento de la ingeniería de software",
  3
);
preguntas[11] = new pregunta(
  "¿Qué organizaciones promueven el proyecto SWEBOK?",
  "Google y Microsoft",
  "NASA y SpaceX",
  "Universidad de Stanford y MIT",
  "IEEE Computer Society y ACM",
  3
);
preguntas[12] = new pregunta(
  "¿Cuántas áreas de conocimiento define SWEBOK para la ingeniería de software?",
  "15",
  "5",
  "7",
  "11",
  0
);
preguntas[13] = new pregunta(
  "¿Cuál de las siguientes áreas NO es parte de las definidas en SWEBOK?",
  "Análisis de hardware",
  "Requisitos de software",
  "Construcción de software",
  "Pruebas de software",
  0
);
preguntas[14] = new pregunta(
  "¿En qué fase del proyecto se encuentra SWEBOK?",
  "Fase de prueba",
  "Fase inicial",
  "Fase final",
  "Fase de implementación",
  0
);
preguntas[15] = new pregunta(
  "¿Cómo se llama la tercera fase del proyecto SWEBOK?",
  "Fase Steel Man",
  "Fase Iron Man",
  "Fase Software Man",
  "Fase Power Man",
  1
);
preguntas[16] = new pregunta(
  "¿Qué contiene la versión de prueba 1.00 de SWEBOK?",
  "Solo referencias de investigación",
  "Artículos científicos organizados en torno a áreas temáticas de ingeniería de software",
  "Un manual de programación",
  "Herramientas de gestión de proyectos",
  1
);
preguntas[17] = new pregunta(
  "¿Cuál es el objetivo de los documentos en SWEBOK?",
  "Definir un modelo de negocio para el software",
  "Definir terminología, conceptos y enfoques para áreas de conocimiento en ingeniería de software",
  "Crear un nuevo lenguaje de programación",
  "Establecer estándares de hardware",
  1
);
preguntas[18] = new pregunta(
  "¿Qué sucederá con SWEBOK cuando finalice el proyecto?",
  "Se lanzará como un producto comercial",
  "Será parte del estándar ISO 9000-3",
  "Se convertirá en un estándar de la IEEE",
  "Se lanzará como un producto comercial",
  2
);
