// Materias con su año y requisitos
const materias = [
  // === PRIMER AÑO ===
  { nombre: "TEORÍA DEL APRENDIZAJE", anio: 1, requisitos: [] },
  { nombre: "PEDAGOGÍA", anio: 1, requisitos: [] },
  { nombre: "BIOLOGÍA", anio: 1, requisitos: [] },
  { nombre: "INTRODUCCIÓN A LA EPISTEMOLOGÍA", anio: 1, requisitos: [] },
  { nombre: "INTRODUCCIÓN A LA PSICOLOGÍA", anio: 1, requisitos: [] },
  { nombre: "EDUCACION SANITARIA", anio: 1, requisitos: [] },
  { nombre: "ECOLOGÍA Y VIDA AL AIRE LIBRE", anio: 1, requisitos: [] },
  { nombre: "GIMNASIA I", anio: 1, requisitos: [] },
  { nombre: "ATLETISMO I", anio: 1, requisitos: [] },
  { nombre: "HANDBALL I", anio: 1, requisitos: [] },
  { nombre: "ANATOMIA Y FISIOLOGIA", anio: 1, requisitos: [] },

  // === SEGUNDO AÑO ===
  { nombre: "BASQUETBOL I", anio: 2, requisitos: [] },
  { nombre: "PSICOLOGÍA EVOLUTIVA I", anio: 2, requisitos: ["INTRODUCCIÓN A LA EPISTEMOLOGÍA"] },
  { nombre: "DIDACTICA GENERAL", anio: 2, requisitos: ["PEDAGOGÍA", "TEORÍA DEL APRENDIZAJE"] },
  { nombre: "NATACION I", anio: 2, requisitos: [] },
  { nombre: "GIMNASIA II", anio: 2, requisitos: ["GIMNASIA I"] },
  { nombre: "ATLETISMO II", anio: 2, requisitos: ["ATLETISMO I"] },
  { nombre: "FISIOLOGIA DEL EJERCICIO", anio: 2, requisitos: ["ANATOMIA Y FISIOLOGIA", "EDUCACION SANITARIA"] },
  { nombre: "DESARROLLO EVOLUTIVO DE LAS ACTIVIDADES MOTORAS", anio: 2, requisitos: [] },
  { nombre: "PSICOLOGIA EVOLUTIVA II", anio: 2, requisitos: ["PSICOLOGÍA EVOLUTIVA I"] },
  { nombre: "ORGANIZACION DE ACTIVIDADES LUDICAS", anio: 2, requisitos: [] },
  { nombre: "ETICA Y DEONTOLOGÍA PROFESIONAL", anio: 2, requisitos: ["INTRODUCCIÓN A LA EPISTEMOLOGÍA"] },
  { nombre: "PSICOLOGÍA SOCIAL", anio: 2, requisitos: ["INTRODUCCIÓN A LA PSICOLOGÍA"] },

  // === TERCER AÑO ===
  { nombre: "GIMNASIA III", anio: 3, requisitos: ["GIMNASIA II"] },
  { nombre: "BIOMECANICA", anio: 3, requisitos: [] },
  { nombre: "FUTBOL I o EXPRESION CORPORAL", anio: 3, requisitos: [] },
  { nombre: "HOCKEY", anio: 3, requisitos: [] },
  { nombre: "VOLEIBOL I", anio: 3, requisitos: [] },
  { nombre: "ELEMENTOS DE SOCIOLOGIA EN EL DEPORTE", anio: 3, requisitos: [] },
  { nombre: "EST. Y EVAL. DE LAS ACTIV. FISICA", anio: 3, requisitos: [] },
  { nombre: "METODOLOGÍA DE LA EDUCACIÓN FÍSICA", anio: 3, requisitos: ["DIDACTICA GENERAL"] },
  { nombre: "RUGBY I", anio: 3, requisitos: [] },
  { nombre: "SOFTBOL I", anio: 3, requisitos: [] },
  { nombre: "NATACION II", anio: 3, requisitos: ["NATACION I"] },

  // === CUARTO AÑO ===
  { nombre: "ELOCUCIÓN", anio: 4, requisitos: [] },
  { nombre: "INTROD. A LA ACTIV. FÍSICA ESPECIAL", anio: 4, requisitos: ["BIOMECANICA"] },
  { nombre: "FOLKLORE Y TANGO", anio: 4, requisitos: ["ORGANIZACION DE ACTIVIDADES LUDICAS"] },
  { nombre: "HISTORIA DE LA EDUCACION ARGENTINA", anio: 4, requisitos: ["PEDAGOGÍA"] },
  { nombre: "HISTORIA DE LA EDUCACION FISICA", anio: 4, requisitos: ["HISTORIA DE LA EDUCACION ARGENTINA"] },
  { nombre: "OBSERVACION Y PRACTICA DOCENTE", anio: 4, requisitos: ["METODOLOGÍA DE LA EDUCACIÓN FÍSICA"] },
  { nombre: "LEGISLACION Y ADMINISTRACION DE LA EDUCACION FISICA", anio: 4, requisitos: ["EST. Y EVAL. DE LAS ACTIV. FISICA"] },

  // === QUINTO AÑO ===
  { nombre: "ELEMENTOS DE RELACIONES PUBLICAS E INSTITUCIONALES", anio: 5, requisitos: [] },
  { nombre: "ELEMENTOS DE COMERCIALIZACION EN EL DEPORTE", anio: 5, requisitos: [] },
  { nombre: "LEGISLACIÓN DEPORTIVA", anio: 5, requisitos: ["ETICA Y DEONTOLOGÍA PROFESIONAL"] },
  { nombre: "SEMINARIO DE TECNOLOGIA DEPORTIVA", anio: 5, requisitos: [] },
  { nombre: "INVESTIGACIÓN APLICADA", anio: 5, requisitos: ["FOLKLORE Y TANGO"] },
  { nombre: "MEDICINA DEPORTIVA", anio: 5, requisitos: ["BIOMECANICA"] },
  { nombre: "METODOLOGIA DE LA INVESTIGACION", anio: 5, requisitos: [] },

  // === TRANSVERSALES ===
  { nombre: "INGLES NIVEL I", anio: "X", requisitos: [] },
  { nombre: "INGLES NIVEL II", anio: "X", requisitos: ["INGLES NIVEL I"] },
  { nombre: "INGLES NIVEL III", anio: "X", requisitos: ["INGLES NIVEL II"] },
  { nombre: "INGLES NIVEL IV", anio: "X", requisitos: ["INGLES NIVEL III"] },
  { nombre: "COMPUTACION NIVEL I", anio: "X", requisitos: [] },
  { nombre: "COMPUTACIÓN NIVEL II", anio: "X", requisitos: ["COMPUTACION NIVEL I"] }
];

const estado = {};
const columnas = document.querySelectorAll(".columna");

materias.forEach((mat) => {
  estado[mat.nombre] = false;

  const btn = document.createElement("div");
  btn.textContent = mat.nombre;
  btn.classList.add("materia");
  btn.id = mat.nombre;

  const col = document.querySelector(`.columna[data-anio='${mat.anio}']`);
  col.appendChild(btn);
});

function inicializar() {
  materias.forEach(mat => {
    if (mat.requisitos.length === 0) {
      document.getElementById(mat.nombre).classList.add("habilitada");
    }
  });
}

document.getElementById("malla-container").addEventListener("click", (e) => {
  if (!e.target.classList.contains("materia")) return;
  const mat = e.target.id;

  if (!e.target.classList.contains("habilitada")) return;

  estado[mat] = true;
  e.target.classList.add("activada");

  materias.forEach(sig => {
    if (estado[sig.nombre]) return;
    const ready = sig.requisitos.every(req => estado[req]);
    if (ready) {
      document.getElementById(sig.nombre).classList.add("habilitada");
    }
  });
});

inicializar();
