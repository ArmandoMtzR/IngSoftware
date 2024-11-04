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
  "No tendrá cambios significativos",
  2
);
preguntas[19] = new pregunta(
  "¿Qué significa que SWEBOK aún no sea un estándar?",
  "No ha sido aceptado por la comunidad académica",
  "Ya es obsoleto",
  "Todavía está en fase de desarrollo y prueba",
  "Ha sido rechazado como estándar",
  2
);
preguntas[20] = new pregunta(
  "¿Cuál de los siguientes aspectos no es claramente abordado por SWEBOK según los criterios CSF?",
  "CSF estáticos",
  "CSF de programación",
  "CSF dinámicos",
  "CSF estáticos",
  2
);
preguntas[21] = new pregunta(
  "¿A quién está dirigida la guía SWEBOK?",
  "Exclusivamente a desarrolladores de software internacionales",
  "Únicamente a programadores principiantes",
  "Solo a estudiantes de ingeniería de software",
  "A organismos públicos, privados, académicos, y profesionales de ingeniería de software",
  3
);
preguntas[22] = new pregunta(
  "¿Cuál es uno de los objetivos de SWEBOK para los organismos públicos y privados?",
  "Facilitar herramientas de software de código abierto",
  "Crear nuevas tecnologías de hardware",
  "Enseñar lenguajes de programación avanzados",
  "Proporcionar una visión estable de la ingeniería de software para definir requerimientos en educación y competencias laborales",
  3
);
preguntas[23] = new pregunta(
  "¿Qué tipo de políticas y normas pretende beneficiar SWEBOK?",
  "Normas de marketing digital",
  "Regulaciones de privacidad de datos",
  "Políticas de seguridad en la red",
  "Normas de certificación, acreditación y guías para la práctica profesional",
  3
);
preguntas[24] = new pregunta(
  "¿Qué comité fue establecido para coordinar la ingeniería de software y promover la profesionalización de esta área?",
  "Comité Coordinador de Ingeniería de Software (SWECC)",
  "Comité de Tecnologías Digitales",
  "Comité de Desarrollo de Software Avanzado",
  "Comité de Ética en Programación",
  0
);
preguntas[25] = new pregunta(
  "¿En qué año fue iniciado el proyecto SWEBOK por SWECC?",
  "1998",
  "1995",
  "2000",
  "2003",
  0
);
preguntas[26] = new pregunta(
  "¿Qué institución fue contratada para gestionar el proyecto SWEBOK?",
  "Universidad de Quebec en Montreal (UQAM)",
  "Universidad de California en Berkeley",
  "Universidad de Toronto",
  "Universidad de Harvard",
  0
);
preguntas[27] = new pregunta(
  "¿Cuántas fases tuvo el proyecto SWEBOK y cómo se llaman?",
  "Dos fases: Fase de Inicio y Fase de Ejecución",
  "Tres fases: Hombre de Paja, Hombre de Piedra y Hombre de Hierro",
  "Cuatro fases: Concepto, Desarrollo, Pruebas y Implementación",
  "Cinco fases: Investigación, Desarrollo, Prueba, Revisión y Publicación",
  1
);
preguntas[28] = new pregunta(
  "¿Qué fase del proyecto SWEBOK marca el inicio de la versión de prueba para uso?",
  "Hombre de Paja",
  "Hombre de Piedra",
  "Hombre de Hierro",
  "Fase de Inicio",
  1
);
preguntas[29] = new pregunta(
  "¿Cuál es la característica principal de la fase Hombre de Hierro en el proyecto SWEBOK?",
  "Es la fase inicial del proyecto",
  "Es la fase en la que se alcanza un consenso mediante revisiones y pruebas",
  "Es una fase en la que se lanzan prototipos de software",
  "Se enfoca en la implementación de políticas de seguridad",
  1
);
preguntas[30] = new pregunta(
  "¿Cuál fue el objetivo principal de la versión actual de la guía SWEBOK?",
  "Traducir el contenido a varios idiomas",
  "Agregar nuevos temas sin aprobación de consenso",
  "Mejorar la legibilidad, consistencia y usabilidad de la guía",
  "Reducir el número de áreas de conocimiento",
  2
);
preguntas[31] = new pregunta(
  "¿Qué se hizo para mejorar la consistencia en la guía SWEBOK?",
  "Se simplificó el lenguaje para principiantes",
  "Se aumentó la cantidad de contenido técnico avanzado",
  "Se reescribió todo el texto para unificar el estilo a lo largo del documento",
  "Se eliminaron varias áreas de conocimiento",
  2
);
preguntas[32] = new pregunta(
  "¿Cuál de las siguientes áreas de conocimiento (AC) fue considerada difícil de aplicar en un contexto práctico?",
  "Pruebas de software",
  "Gestión del software",
  "Construcción del software",
  "Configuración de software",
  2
);
preguntas[33] = new pregunta(
  "¿Qué problema se identificó en el área de conocimiento de gestión en la versión de prueba de SWEBOK?",
  "Era demasiado específica en la ingeniería de software",
  "No estaba alineada con los estándares de la industria",
  "Mezclaba conceptos de calidad del producto y proceso",
  "Estaba muy cercana al concepto de gestión en general",
  3
);
preguntas[34] = new pregunta(
  "¿Cuál fue la crítica principal al área de conocimiento de calidad en la guía SWEBOK?",
  "No incluía técnicas de calidad modernas",
  "No era fácil de entender",
  "No cubría la calidad en el proceso",
  "Mezclaba la calidad en el proceso y calidad en el producto",
  3
);
preguntas[35] = new pregunta(
  "¿Qué cambios se realizaron en algunas áreas de conocimiento después de la fase de prueba?",
  "Se fusionaron en una sola área de conocimiento",
  "Se actualizaron con nuevos temas sin aprobación",
  "Se tradujeron a otros idiomas",
  "Se revisaron para eliminar material que ya estaba en otras áreas",
  3
);
preguntas[36] = new pregunta(
  "¿Qué se menciona como una de las limitaciones de la guía SWEBOK?",
  "La ingeniería de software evoluciona continuamente con nuevas tecnologías y prácticas",
  "La guía se enfoca en técnicas obsoletas",
  "No incluye referencias a literatura científica",
  "Solo es aplicable en contextos académicos",
  0
);
preguntas[37] = new pregunta(
  "¿Por qué se seleccionaron las referencias en la guía SWEBOK?",
  "Por estar en inglés, ser accesibles, recientes y fáciles de leer",
  "Por ser las únicas disponibles en el tema",
  "Por ser referencias definitivas en el campo",
  "Por su antigüedad y relevancia histórica",
  0
);
preguntas[38] = new pregunta(
  "¿Cómo describe la guía SWEBOK la selección de referencias incluidas en ella?",
  "Como una selección razonable, no definitiva",
  "Como una selección exhaustiva y definitiva",
  "Como una recopilación limitada a artículos científicos",
  "Como un compendio de todas las referencias disponibles",
  0
);
preguntas[39] = new pregunta(
  "¿Qué tipo de referencias fueron omitidas en la guía SWEBOK debido a una limitación mencionada?",
  "Referencias que no son recientes",
  "Referencias que no están en inglés",
  "Referencias de autores no reconocidos",
  "Referencias que son difíciles de leer",
  1
);
preguntas[40] = new pregunta(
  "¿Qué recomendación se dio después del periodo de prueba de la guía SWEBOK?",
  "Revisar completamente todas las áreas de conocimiento",
  "Reescribir tres áreas de conocimiento específicas",
  "Reducir el número de áreas de conocimiento a la mitad",
  "Traducir la guía a otros idiomas",
  1
);
preguntas[41] = new pregunta(
  "¿Por qué es posible que SWEBOK necesita ser actualizado en el futuro?",
  "Porque la guía se quedó obsoleta en el momento de su publicación",
  "Debido a la evolución continua de la ingeniería de software y la aparición de nuevas técnicas",
  "Para cumplir con los estándares de hardware modernos",
  "Para incluir autores y referencias no seleccionadas",
  1
);
preguntas[42] = new pregunta(
  "¿Cómo define SWEBOK un requerimiento de software?",
  "Como una funcionalidad opcional del software",
  "Como un aspecto estético del diseño de la interfaz",
  "Como una propiedad que debe exhibir el software para resolver un problema del mundo real",
  "Como una parte secundaria del proceso de desarrollo",
  2
);
preguntas[43] = new pregunta(
  "¿Cuál es la primera subárea de conocimiento en el área de Requerimientos del Software según SWEBOK?",
  "Validación de Requerimientos",
  "Captura de Requisitos",
  "Fundamentos de los Requerimientos del Software",
  "Análisis de Requerimientos",
  2
);
preguntas[44] = new pregunta(
  "¿Qué tipos de requerimientos se mencionan en la subárea de Fundamentos de los Requerimientos del Software?",
  "Software vs. hardware, obligatorio vs. opcional",
  "Estructural vs. funcional, interno vs. externo",
  "Producto vs. proceso, funcional vs. no funcional, propiedades emergentes",
  "Diseño vs. desarrollo, orientado a usuarios vs. orientado a sistema",
  2
);
preguntas[45] = new pregunta(
  "¿Cuál es el propósito de la subárea de Validación de Requerimientos?",
  "Realizar pruebas de rendimiento del sistema",
  "Redactar el documento de especificación",
  "Documentar el diseño arquitectónico del software",
  "Descubrir problemas en los requerimientos antes de asignar recursos",
  3
);
preguntas[46] = new pregunta(
  "¿Qué actividades incluye la subárea de Análisis de Requerimientos?",
  "Redacción de manuales de usuario y diseño de interfaz",
  "Creación de prototipos y pruebas de aceptación",
  "Revisión de especificaciones y optimización de código",
  "Clasificación, modelado conceptual, diseño arquitectural, asignación y negociación de requerimientos",
  3
);
preguntas[47] = new pregunta(
  "¿Cuál de las siguientes opciones describe correctamente la subárea de Especificación de Requerimientos?",
  "Consiste únicamente en la captura de requerimientos funcionales",
  "Su objetivo principal es la validación del sistema desarrollado",
  "Se enfoca en la elaboración de un único documento de requerimientos para todos los proyectos",
  "Generalmente implica la producción de un documento que puede ser revisado y aprobado sistemáticamente",
  3
);
preguntas[48] = new pregunta(
  "¿Qué tema NO está incluido en la subárea de Consideraciones Prácticas sobre los requerimientos del software en SWEBOK?",
  "Diseño gráfico de la interfaz de usuario",
  "Proceso iterativo de los requerimientos",
  "Medición de los requerimientos",
  "Gestión de cambios",
  0
);
preguntas[49] = new pregunta(
  "¿Cuál es el objetivo de la subárea de Captura de Requisitos en SWEBOK?",
  "Identificar de dónde provienen los requerimientos y cómo el ingeniero de software puede obtenerlos",
  "Evaluar el impacto de los cambios en los requisitos durante el desarrollo",
  "Validar que los requisitos sean correctos y aceptables para el usuario",
  "Documentar los requisitos en un formato estandarizado",
  0
);
