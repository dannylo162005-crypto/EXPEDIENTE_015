
const questions = [
  // NIVEL 1: IDENTIDAD DIGITAL
  {
    level: 1, category: "Identidad", difficulty: "INICIACIÓN",
    title: "¿Cuál es el nombre de la operadora que está jugando?",
    text: "Primera comprobación de identidad.",
    options: ["Estefanía", "Esthefany", "Stephanie", "Estefany María"],
    answer: 1,
    hint: "La forma de escribirlo incluye una h después de la t.",
    explanation: "La persona para quien Danilo preparó esta misión se llama Esthefany.",
    type: "choice"
  },
  {
    level: 1, category: "Identidad", difficulty: "INICIACIÓN",
    title: "¿Quién preparó este expediente?",
    text: "Busca el nombre completo del remitente.",
    options: ["Danilo Mendoza", "Daniel Mendoza", "David Mendoza", "Damián Mendoza"],
    answer: 0,
    hint: "Su nombre comienza por D y su apellido es Mendoza.",
    explanation: "El expediente está personalizado para Danilo Mendoza.",
    type: "choice"
  },
  {
    level: 1, category: "Su mundo", difficulty: "INICIACIÓN",
    title: "¿A qué se dedica Esthefany?",
    text: "Una pista conecta su mundo con esta misión.",
    options: ["Programación", "Medicina", "Fotografía", "Diseño de modas"],
    answer: 0,
    hint: "Trabaja con código, lógica y sistemas.",
    explanation: "Danilo me contó que Esthefany es programadora.",
    type: "choice"
  },
  {
    level: 1, category: "Su vocación", difficulty: "INICIACIÓN",
    title: "¿Qué camino profesional está siguiendo Danilo?",
    text: "Este dato forma parte de algo importante para él.",
    options: ["Estudiante de policía", "Chef profesional", "Piloto comercial", "Abogado"],
    answer: 0,
    hint: "Su vocación está relacionada con el servicio policial.",
    explanation: "Danilo se ha identificado como estudiante de policía y ha hablado de su vocación.",
    type: "choice"
  },
  {
    level: 1, category: "Clave romántica", difficulty: "INICIACIÓN",
    title: "¿Qué frase eligió Danilo para su regalo digital?",
    text: "Una línea que conecta el amor con el mundo de la programación.",
    options: [
      "El amor es un código imposible",
      "No soy programador, pero por ti aprendo a hackear el sistema",
      "Te amo más que a la tecnología",
      "Nuestro amor nunca necesita actualizarse"
    ],
    answer: 1,
    hint: "La frase habla de aprender a hacer algo por amor.",
    explanation: "La frase especial que Danilo eligió es: «No soy programador, pero por ti aprendo a hackear el sistema».",
    type: "choice"
  },
  {
    level: 1, category: "Conexión", difficulty: "INICIACIÓN",
    title: "¿Qué te gustaría que Esthefany sintiera al estar contigo?",
    text: "No hay respuesta incorrecta. Elige la opción que más se acerque a tus sentimientos.",
    options: ["Tranquilidad", "Confianza", "Alegría", "Sentirse elegida"],
    hint: "Piensa en lo que quieres construir, no en lo que suena más bonito.",
    explanation: "Esta es una pregunta personal. Tu elección puede abrir una conversación sobre lo que ambos necesitan.",
    type: "reflection"
  },
  {
    level: 1, category: "Conexión", difficulty: "INICIACIÓN",
    title: "¿Qué detalle cotidiano te haría sentir más querida?",
    text: "Escoge lo que más se parezca a ti.",
    options: [
      "Un mensaje inesperado",
      "Que me escuchen de verdad",
      "Tiempo de calidad",
      "Una sorpresa pensada para mí"
    ],
    hint: "Piensa en algo pequeño que puedas reconocer en la vida real.",
    explanation: "Esta respuesta puede ayudar a Danilo a conocer mejor tus formas favoritas de recibir cariño.",
    type: "reflection"
  },
  {
    level: 1, category: "Conexión", difficulty: "INICIACIÓN",
    title: "Cuando tienes un día difícil, ¿qué tipo de apoyo prefieres?",
    text: "Elige la opción que te haga sentir comprendida.",
    options: [
      "Que me escuchen sin juzgar",
      "Que me hagan reír",
      "Que me den ideas si las pido",
      "Que me acompañen aunque no hable"
    ],
    hint: "No todo el mundo necesita el mismo tipo de ayuda.",
    explanation: "Compartir esta respuesta puede ayudar a que el otro te acompañe de la manera que necesitas.",
    type: "reflection"
  },
  {
    level: 1, category: "Conexión", difficulty: "INICIACIÓN",
    title: "¿Qué valor no debería faltar nunca en una relación?",
    text: "Elige el valor que quieres proteger incluso cuando haya desacuerdos.",
    options: ["Confianza", "Respeto", "Comunicación", "Lealtad"],
    hint: "Piensa en algo que se demuestre con acciones.",
    explanation: "Lo importante es conversar sobre lo que ese valor significa para ambos.",
    type: "reflection"
  },
  {
    level: 1, category: "Primera misión", difficulty: "INICIACIÓN",
    title: "¿Qué cita sencilla te gustaría disfrutar con Danilo?",
    text: "Imagina un plan que les permita compartir tiempo de calidad.",
    options: [
      "Caminar y conversar",
      "Preparar algo de comer",
      "Ver una película abrazados",
      "Conocer un lugar nuevo"
    ],
    hint: "Una cita bonita no depende necesariamente del presupuesto.",
    explanation: "Guarda esta idea: puede convertirse en un plan real para ustedes.",
    type: "reflection"
  },

  // NIVEL 2: VÍNCULO Y CONFIANZA
  {
    level: 2, category: "Historia conocida", difficulty: "INTERMEDIO",
    title: "¿Qué reto ha aparecido en la historia de ustedes?",
    text: "Busca el desafío que han tenido que aprender a manejar.",
    options: [
      "La distancia",
      "Una competencia deportiva",
      "Un negocio compartido ya abierto",
      "Vivir juntos desde hace años"
    ],
    answer: 0,
    hint: "A veces el cariño tiene que recorrer kilómetros.",
    explanation: "La distancia ha formado parte de su historia. No define toda la relación, pero sí ha sido un reto.",
    type: "choice"
  },
  {
    level: 2, category: "Planes", difficulty: "INTERMEDIO",
    title: "¿Qué ha expresado Danilo que desea construir con Esthefany?",
    text: "Elige la idea que coincide con lo que ha compartido.",
    options: [
      "Evitar hablar del futuro",
      "Construir un futuro juntos y crecer como pareja",
      "Competir para tener siempre la razón",
      "No hacer planes de ningún tipo"
    ],
    answer: 1,
    hint: "Ha hablado de vivir juntos y formar una familia algún día.",
    explanation: "Danilo ha expresado que sueña con construir un futuro con Esthefany. Eso no significa que cada detalle esté decidido.",
    type: "choice"
  },
  {
    level: 2, category: "Acciones", difficulty: "INTERMEDIO",
    title: "¿Qué quiere demostrar Danilo además de decir «te amo»?",
    text: "Una pista sobre cómo quiere expresar sus sentimientos.",
    options: [
      "Que las promesas lo resuelven todo",
      "Que el amor se demuestra también con acciones",
      "Que nunca habrá problemas",
      "Que siempre tiene la razón"
    ],
    answer: 1,
    hint: "No se trata solamente de decirlo: también hay que demostrarlo.",
    explanation: "Danilo ha expresado que quiere demostrar su amor con hechos, no solamente con palabras.",
    type: "choice"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Qué parte de la distancia te cuesta más?",
    text: "Elige la opción que más se acerque a tu experiencia.",
    options: [
      "No poder abrazarnos cuando quiero",
      "Coordinar llamadas y horarios",
      "Extrañar los momentos cotidianos",
      "No saber siempre cómo acompañarnos"
    ],
    hint: "No tienes que minimizar lo que sientes para cuidar a la otra persona.",
    explanation: "Nombrar lo difícil permite buscar juntos formas concretas de acompañarse.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "Si aparece un malentendido, ¿qué ayuda más a resolverlo?",
    text: "Elige una práctica que te gustaría intentar en pareja.",
    options: [
      "Hablar cuando estemos más tranquilos",
      "Preguntar antes de asumir",
      "Explicar lo que sentimos sin atacar",
      "Escuchar hasta el final"
    ],
    hint: "La meta no es ganar una discusión, sino entenderse.",
    explanation: "Hablar con respeto ayuda a resolver el problema sin convertir a la pareja en el problema.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Qué sueño te gustaría convertir en un plan concreto con Danilo?",
    text: "Escoge una idea que te ilusione; no es una promesa de fecha.",
    options: [
      "Tener más tiempo juntos",
      "Conocer un lugar nuevo",
      "Crear un proyecto en pareja",
      "Construir nuestro futuro paso a paso"
    ],
    hint: "Un sueño compartido se vuelve más real cuando acuerdan pequeños pasos.",
    explanation: "Pueden empezar por conversar sobre qué desean y qué paso concreto podrían dar.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Cómo prefieres que te apoyen cuando estás preocupada?",
    text: "Elige lo que te haga sentir comprendida.",
    options: [
      "Que me escuchen primero",
      "Que me pregunten qué necesito",
      "Que me den ideas si las pido",
      "Que me acompañen en silencio"
    ],
    hint: "A veces la mejor ayuda empieza con una pregunta.",
    explanation: "Compartir cómo quieres recibir apoyo evita que el otro tenga que adivinarlo.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Qué tradición pequeña te gustaría crear como pareja?",
    text: "Algo que puedan repetir incluso cuando estén ocupados o lejos.",
    options: [
      "Una llamada especial",
      "Una nota para guardar",
      "Planear una cita por turnos",
      "Una pregunta profunda cada semana"
    ],
    hint: "Las costumbres pequeñas dan algo bonito que esperar.",
    explanation: "Una tradición compartida puede acercarlos incluso cuando no pueden estar en el mismo lugar.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Qué te gustaría que Danilo entendiera mejor de ti?",
    text: "Elige un tema que te gustaría conversar con él.",
    options: [
      "Qué me calma cuando estoy triste",
      "Qué me hace sentir segura",
      "Qué sueño me importa mucho",
      "Cómo me gusta recibir cariño"
    ],
    hint: "Puedes compartir solamente lo que te sientas cómoda contando.",
    explanation: "Conocerse es un proceso continuo. No tienes que contarlo todo de golpe.",
    type: "reflection"
  },
  {
    level: 2, category: "Conexión", difficulty: "INTERMEDIO",
    title: "¿Qué significa elegir una relación en los días difíciles?",
    text: "Elige una idea que te gustaría practicar en pareja.",
    options: [
      "Hablar con honestidad y buscar soluciones",
      "Escuchar antes de rendirse",
      "Respetar los límites y volver a conversar",
      "Cuidar el vínculo sin ignorar los problemas"
    ],
    hint: "Elegirse no significa aceptar cualquier cosa.",
    explanation: "Una relación sana necesita cariño, respeto, límites y disposición para reparar cuando haga falta.",
    type: "reflection"
  },

  // NIVEL 3: DESENCRIPTACIÓN FINAL
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "¿Quién crees que disfrutaría más organizar una sorpresa misteriosa?",
    text: "Esta es una predicción divertida, no un dato confirmado.",
    options: ["Danilo", "Esthefany", "Los dos por igual", "Depende de la ocasión"],
    hint: "No hay una respuesta oficial: elige tu intuición.",
    explanation: "No existe una respuesta correcta. Pueden contar qué tipo de sorpresa les gustaría preparar.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "Describe tu cita ideal sin preocuparte por el presupuesto.",
    text: "Elige el ingrediente que más te importa.",
    options: [
      "Una conversación que no quiera terminar",
      "Risas y bromas entre nosotros",
      "Un detalle inesperado",
      "Un momento tranquilo a solas"
    ],
    hint: "Piensa en lo que hace especial un momento para ti.",
    explanation: "Esta respuesta puede inspirar una futura cita sin fingir que ya ocurrió.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "¿Qué gesto romántico te gustaría recibir ahora mismo?",
    text: "Elige lo que más te emocionaría hoy.",
    options: [
      "Un mensaje escrito con intención",
      "Una llamada larga y sincera",
      "Una sorpresa preparada con cuidado",
      "Un abrazo que dure bastante"
    ],
    hint: "Expresar lo que te gusta también es una forma de acercarse.",
    explanation: "Puedes contarle a Danilo cuál elegiste. No tiene que adivinar todas tus necesidades.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "Elige un lema para la siguiente etapa de su relación.",
    text: "¿Cuál te gustaría recordar cuando la vida se complique?",
    options: [
      "Un día a la vez, juntos",
      "Más hechos, más confianza",
      "Nos seguimos eligiendo",
      "El problema contra nosotros, no nosotros contra nosotros"
    ],
    hint: "Un lema funciona cuando se convierte en una acción cotidiana.",
    explanation: "Pueden elegirlo como recordatorio de equipo, sin esperar que todo sea perfecto.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "¿Qué te gustaría descubrir de Danilo que todavía no conoces del todo?",
    text: "Escoge un tema para una conversación especial.",
    options: [
      "Una meta que le ilusione",
      "Qué le calma cuando se preocupa",
      "Un gusto que comparte poco",
      "Cómo imagina su vida en unos años"
    ],
    hint: "Incluso cuando conoces mucho a alguien, quedan cosas por descubrir.",
    explanation: "Una buena pregunta puede ser el inicio de una conversación que recuerden.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "¿Cómo celebrarías un logro importante de tu pareja?",
    text: "Elige un gesto que se sienta personal.",
    options: [
      "Una carta o nota",
      "Una comida o plan especial",
      "Una llamada para celebrar de verdad",
      "Un detalle relacionado con su sueño"
    ],
    hint: "Celebrar también es demostrar que te alegra ver crecer al otro.",
    explanation: "Acompañar los logros es una manera concreta de mostrar apoyo.",
    type: "reflection"
  },
  {
    level: 3, category: "Protocolo sorpresa", difficulty: "AVANZADO",
    title: "¿Qué promesa realista te gustaría que ambos cuidaran?",
    text: "Elige algo que puedan practicar, no una promesa de perfección.",
    options: [
      "Escucharnos sin burlarnos",
      "Hablar con sinceridad aunque cueste",
      "Pedir perdón y reparar cuando haga falta",
      "Hacer espacio para nosotros con intención"
    ],
    hint: "Una promesa útil describe una acción posible.",
    explanation: "Las promesas más valiosas son concretas, posibles y se sostienen con hechos.",
    type: "reflection"
  },
  {
    level: 3, category: "Última llave", difficulty: "AVANZADO",
    title: "Completa: «Quiero seguir descubriéndote porque…»",
    text: "Elige la idea más cercana a lo que sientes.",
    options: [
      "Todavía hay mucho de ti que quiero conocer",
      "Me gusta quien eres y quien estás llegando a ser",
      "Quiero que sigamos creciendo sin dejar de ser nosotros",
      "Quiero seguir aprendiendo de ti"
    ],
    hint: "No existe una frase perfecta. Lo importante es que sea honesta.",
    explanation: "No necesitan tener todas las respuestas hoy. Pueden seguir haciéndose preguntas.",
    type: "reflection"
  },
  {
    level: 3, category: "Última llave", difficulty: "AVANZADO",
    title: "¿Qué simboliza la frase del «sistema» que Danilo eligió?",
    text: "Última pregunta de conocimiento. Esta abre el mensaje final.",
    options: [
      "Que el amor es una competencia",
      "Que quiere aprender cosas nuevas por amor a ella",
      "Que nunca se va a equivocar",
      "Que los problemas desaparecen solos"
    ],
    answer: 1,
    hint: "La frase habla de estar dispuesto a aprender algo nuevo por amor.",
    explanation: "La frase simboliza el deseo de esforzarse y aprender por amor, incluso fuera de lo que uno domina.",
    type: "choice"
  }
];

// ESTADO DEL JUEGO
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let hintsUsed = 0;
let streak = 0;
let selectedAnswer = null;
let locked = false;
let hintUsedThisQuestion = false;

const $ = id => document.getElementById(id);

function showScreen(screenId) {
  ["intro", "game", "final"].forEach(id => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  hintsUsed = 0;
  streak = 0;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  locked = false;
  selectedAnswer = null;
  hintUsedThisQuestion = false;

  const q = questions[currentQuestion];

  $("levelLabel").textContent =
    `NIVEL 0${q.level} // ${q.category.toUpperCase()}`;

  $("levelName").textContent =
    q.level === 1 ? "Identidad digital" :
    q.level === 2 ? "Vínculo y confianza" :
    "Desencriptación final";

  $("score").textContent = String(score).padStart(3, "0");
  $("questionNumber").textContent =
    `PRUEBA ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

  $("percentage").textContent =
    `${Math.round(currentQuestion / questions.length * 100)}%`;

  $("progressBar").style.width =
    `${currentQuestion / questions.length * 100}%`;

  $("category").textContent = q.category.toUpperCase();
  $("difficulty").textContent = q.difficulty || (
    q.level === 1 ? "INICIACIÓN" :
    q.level === 2 ? "INTERMEDIO" : "AVANZADO"
  );

  $("questionTitle").textContent = q.title;
  $("questionText").textContent = q.text;

  $("hintBox").classList.add("hidden");
  $("feedback").classList.add("hidden");
  $("feedback").classList.remove("bad");

  $("hintBtn").classList.remove("hidden");
  $("hintBtn").disabled = false;
  $("hintBtn").textContent = "⌁ SOLICITAR PISTA (-2 PUNTOS)";

  $("submitBtn").classList.add("hidden");
  $("nextBtn").classList.add("hidden");

  const answerArea = $("answers");
  answerArea.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";

    const key = document.createElement("span");
    key.className = "option-key";
    key.textContent = `${String.fromCharCode(65 + index)} //`;

    const label = document.createElement("span");
    label.textContent = option;

    button.append(key, label);
    button.addEventListener("click", () => selectOption(index, button));

    answerArea.appendChild(button);
  });

  $("streak").textContent = `RACHA: ${streak}`;
}

function selectOption(index, button) {
  if (locked) return;

  selectedAnswer = index;

  document.querySelectorAll(".answer-option").forEach(option => {
    option.classList.remove("selected");
  });

  button.classList.add("selected");
  $("submitBtn").classList.remove("hidden");
}

function showHint() {
  if (locked || hintUsedThisQuestion) return;

  hintUsedThisQuestion = true;
  hintsUsed++;
  score = Math.max(0, score - 2);

  $("score").textContent = String(score).padStart(3, "0");
  $("hintBox").textContent = "PISTA DESCIFRADA // " + questions[currentQuestion].hint;
  $("hintBox").classList.remove("hidden");

  $("hintBtn").disabled = true;
  $("hintBtn").textContent = "PISTA UTILIZADA ✓";
}

function submitAnswer() {
  if (locked || selectedAnswer === null) return;

  locked = true;

  const q = questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-option")];
  const isKnowledgeQuestion = q.type === "choice";
  const isCorrect = isKnowledgeQuestion && selectedAnswer === q.answer;

  buttons.forEach(button => button.disabled = true);

  if (isCorrect) {
    score += 10;
    correctAnswers++;
    streak++;
    buttons[selectedAnswer].classList.add("correct");
  } else if (isKnowledgeQuestion) {
    streak = 0;
    buttons[selectedAnswer].classList.add("incorrect");
    buttons[q.answer].classList.add("correct");
  } else {
    // Las preguntas personales no tienen respuesta equivocada.
    score += 10;
    streak++;
    buttons[selectedAnswer].classList.add("correct");
  }

  $("score").textContent = String(score).padStart(3, "0");
  $("streak").textContent = `RACHA: ${streak}`;

  const feedback = $("feedback");
  feedback.classList.remove("hidden");

  if (isKnowledgeQuestion && !isCorrect) {
    feedback.classList.add("bad");
    feedback.innerHTML =
      `<strong>PISTA REVELADA //</strong> ${escapeHTML(q.explanation)}`;
  } else if (isKnowledgeQuestion) {
    feedback.classList.remove("bad");
    feedback.innerHTML =
      `<strong>ACCESO VALIDADO +10 //</strong> ${escapeHTML(q.explanation)}`;
  } else {
    feedback.classList.remove("bad");
    feedback.innerHTML =
      `<strong>RETO COMPLETADO +10 //</strong> ${escapeHTML(q.explanation)}`;
  }

  $("hintBtn").classList.add("hidden");
  $("submitBtn").classList.add("hidden");
  $("nextBtn").classList.remove("hidden");

  $("nextBtn").textContent =
    currentQuestion === questions.length - 1
      ? "DESENCRIPTAR MENSAJE FINAL ↗"
      : "SIGUIENTE PRUEBA →";

  $("percentage").textContent =
    `${Math.round((currentQuestion + 1) / questions.length * 100)}%`;

  $("progressBar").style.width =
    `${(currentQuestion + 1) / questions.length * 100}%`;
}

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function nextQuestion() {
  if (!locked) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    finishGame();
  }
}

function finishGame() {
  showScreen("final");

  $("finalScore").textContent = score;
  $("finalCorrect").textContent = correctAnswers;
  $("finalHints").textContent = hintsUsed;

  if (score >= 260) {
    $("finalRank").textContent = "CÓMPLICE DEL SISTEMA";
    $("rankDescription").textContent =
      "Detectaste muchas pistas y completaste los retos. Lo más valioso será lo que conversen después de jugar.";
    $("finalIntro").textContent =
      "Acceso completo. Has llegado al final de las 30 pruebas y el archivo reservado para ti ya puede abrirse.";
  } else if (score >= 200) {
    $("finalRank").textContent = "INVESTIGADORA EXPERTA";
    $("rankDescription").textContent =
      "Has reunido muchas claves. Sigue haciendo preguntas: conocer a alguien es una aventura que no termina en una partida.";
    $("finalIntro").textContent =
      "Misión cumplida. Has superado las pruebas y puedes descubrir el mensaje final.";
  } else if (score >= 130) {
    $("finalRank").textContent = "RASTREADORA DE PISTAS";
    $("rankDescription").textContent =
      "Has descubierto datos y abierto conversaciones. Las respuestas que faltaron son oportunidades para conocerse.";
    $("finalIntro").textContent =
      "El archivo ya reconoce tu curiosidad y tu disposición a descubrir lo que hay detrás de cada pista.";
  } else {
    $("finalRank").textContent = "NUEVA RECLUTA";
    $("rankDescription").textContent =
      "Toda investigación comienza con preguntas. Ahora tienes nuevas pistas y temas para conversar con Danilo.";
    $("finalIntro").textContent =
      "Has completado la misión. Recuerda que una puntuación no mide cuánto quieres a alguien: solo registra cómo te fue en este juego.";
  }

  // MENSAJE PERSONALIZADO CON DATOS CONOCIDOS
  $("loveMessage").innerHTML = `
    Esthefany,<br><br>

    si llegaste hasta aquí, encontraste el mensaje que Danilo dejó al final
    de este expediente. Él me ha contado que eres programadora, que la
    distancia ha sido parte de su historia y que quiere construir un futuro
    contigo. También ha expresado que desea demostrar lo que siente con
    hechos, no solamente con palabras.<br><br>

    No significa que todo tenga que ser perfecto ni que debas conocer todas
    las respuestas. Significa que todavía hay cosas por descubrir,
    conversaciones por tener y momentos que pueden construir a su manera,
    paso a paso.<br><br>

    Hay una frase que Danilo eligió para ti y que resume una parte de su
    intención:<br><br>

    <em>«No soy programador, pero por ti aprendo a hackear el sistema».</em>
    <br><br>

    Que el código más importante no sea una contraseña ni una promesa
    imposible, sino la forma en que se escuchan, se respetan, se acompañan
    y se eligen con libertad.<br><br>

    <strong>
      La última clave no estaba escondida en el juego:
      está en todo lo que todavía pueden aprender el uno del otro. 🤍✨
    </strong>
  `;

  celebrate();
}

function celebrate() {
  const finalScreen = $("final");

  for (let i = 0; i < 24; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = ["✦", "◇", "✧", "·"][Math.floor(Math.random() * 4)];

    particle.style.cssText = `
      position:absolute;
      left:${Math.random() * 100}%;
      top:${20 + Math.random() * 70}%;
      color:#61f4e6;
      font-size:${12 + Math.random() * 20}px;
      pointer-events:none;
      animation:floatUp 2s ease-out forwards;
    `;

    finalScreen.appendChild(particle);
    setTimeout(() => particle.remove(), 2200);
  }
}

function copyResult() {
  const text =
    `EXPEDIENTE 015 // DANILO + ESTHEFANY\n` +
    `Puntuación: ${score}\n` +
    `Datos acertados: ${correctAnswers}\n` +
    `Pistas usadas: ${hintsUsed}\n` +
    `Rango: ${$("finalRank").textContent}\n\n` +
    `La última clave está en todo lo que todavía pueden aprender el uno del otro. 🤍✨`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => $("copyBtn").textContent = "RESULTADO COPIADO ✓")
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    $("copyBtn").textContent = "RESULTADO COPIADO ✓";
  } catch {
    $("copyBtn").textContent = "NO SE PUDO COPIAR";
  }

  textarea.remove();
}

// CONECTAR BOTONES
$("startBtn").addEventListener("click", startGame);
$("hintBtn").addEventListener("click", showHint);
$("submitBtn").addEventListener("click", submitAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("replayBtn").addEventListener("click", startGame);
$("copyBtn").addEventListener("click", copyResult);

// Animación del mensaje final
const animationStyle = document.createElement("style");
animationStyle.textContent = `
  @keyframes floatUp {
    from { transform: translateY(0) rotate(0); opacity: 1; }
    to { transform: translateY(-110px) rotate(180deg); opacity: 0; }
  }
`;
document.head.appendChild(animationStyle);
