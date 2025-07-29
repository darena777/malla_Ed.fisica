const materias = {
  "TEORÍA DEL APRENDIZAJE": [],
  "PEDAGOGÍA": [],
  "BIOLOGÍA": [],
  "INTRODUCCIÓN A LA EPISTEMOLOGÍA": [],
  "INTRODUCCIÓN A LA PSICOLOGÍA": [],
  "EDUCACION SANITARIA": [],
  "ECOLOGÍA Y VIDA AL AIRE LIBRE": [],
  "GIMNASIA I": [],
  "ATLETISMO I": [],
  "HANDBALL I": [],
  "ANATOMIA Y FISIOLOGIA": [],
  "BASQUETBOL I": [],
  "PSICOLOGÍA EVOLUTIVA I": ["INTRODUCCIÓN A LA EPISTEMOLOGÍA"],
  "DIDACTICA GENERAL": ["PEDAGOGÍA", "TEORÍA DEL APRENDIZAJE"],
  "NATACION I": [],
  "GIMNASIA II": ["GIMNASIA I"],
  "ATLETISMO II": ["ATLETISMO I"],
  "FISIOLOGIA DEL EJERCICIO": ["ANATOMIA Y FISIOLOGIA", "EDUCACION SANITARIA"],
  "DESARROLLO EVOLUTIVO DE LAS ACTIVIDADES MOTORAS": [],
  "PSICOLOGIA EVOLUTIVA II": ["PSICOLOGÍA EVOLUTIVA I"],
  "ORGANIZACION DE ACTIVIDADES LUDICAS": [],
  "ETICA Y DEONTOLOGÍA PROFESIONAL": ["INTRODUCCIÓN A LA EPISTEMOLOGÍA"],
  "PSICOLOGÍA SOCIAL": ["INTRODUCCIÓN A LA PSICOLOGÍA"],
  "GIMNASIA III": ["GIMNASIA II"],
  "BIOMECANICA": [],
  "FUTBOL I o EXPRESION CORPORAL": [],
  "HOCKEY": [],
  "VOLEIBOL I": [],
  "ELEMENTOS DE SOCIOLOGIA EN EL DEPORTE": [],
  "EST. Y EVAL. DE LAS ACTIV. FISICA": [],
  "METODOLOGÍA DE LA EDUCACIÓN FÍSICA": ["DIDACTICA GENERAL"],
  "RUGBY I": [],
  "SOFTBOL I": [],
  "NATACION II": ["NATACION I"],
  "ELOCUCIÓN": [],
  "INTROD. A LA ACTIV. FÍSICA ESPECIAL": ["BIOMECANICA"],
  "FOLKLORE Y TANGO": ["ORGANIZACION DE ACTIVIDADES LUDICAS"],
  "HISTORIA DE LA EDUCACION ARGENTINA": ["PEDAGOGÍA"],
  "HISTORIA DE LA EDUCACION FISICA": ["HISTORIA DE LA EDUCACION ARGENTINA"],
  "OBSERVACION Y PRACTICA DOCENTE": ["METODOLOGÍA DE LA EDUCACIÓN FÍSICA"],
  "LEGISLACION Y ADMINISTRACION DE LA EDUCACION FISICA": ["EST. Y EVAL. DE LAS ACTIV. FISICA"],
  "ELEMENTOS DE RELACIONES PUBLICAS E INSTITUCIONALES": [],
  "ELEMENTOS DE COMERCIALIZACION EN EL DEPORTE": [],
  "LEGISLACIÓN DEPORTIVA": ["ETICA Y DEONTOLOGÍA PROFESIONAL"],
  "SEMINARIO DE TECNOLOGIA DEPORTIVA": [],
  "INVESTIGACIÓN APLICADA": ["FOLKLORE Y TANGO"],
  "MEDICINA DEPORTIVA": ["BIOMECANICA"],
  "METODOLOGIA DE LA INVESTIGACION": [],
  "INGLES NIVEL I": [],
  "INGLES NIVEL II": ["INGLES NIVEL I"],
  "INGLES NIVEL III": ["INGLES NIVEL II"],
  "INGLES NIVEL IV": ["INGLES NIVEL III"],
  "COMPUTACION NIVEL I": [],
  "COMPUTACIÓN NIVEL II": ["COMPUTACION NIVEL I"]
};

const estado = {};
const container = document.getElementById("malla-container");

// Crear botones
for (let materia in materias) {
  estado[materia] = false;

  const btn = document.createElement("div");
  btn.textContent = materia;
  btn.classList.add("materia");
  btn.id = materia;
  container.appendChild(btn);
}

// Habilita las materias sin requisitos
function inicializar() {
  for (let materia in materias) {
    if (materias[materia].length === 0) {
      document.getElementById(materia).classList.add("habilitada");
    }
  }
}

// Al hacer clic, activar y habilitar otras
container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("materia")) return;

  const materia = e.target.id;
  if (!e.target.classList.contains("habilitada")) return;

  // Marcar como activada
  estado[materia] = true;
  e.target.classList.add("activada");

  // Habilitar las materias cuyo requisito ya se cumple
  for (let sig in materias) {
    if (estado[sig]) continue;
    const requisitos = materias[sig];
    const cumplidos = requisitos.every(req => estado[req]);

    if (cumplidos) {
      document.getElementById(sig)?.classList.add("habilitada");
    }
  }
});

inicializar();

