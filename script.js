const materias = document.querySelectorAll(".materia");

let completadas = new Set();

function actualizarProgreso() {
  const total = document.querySelectorAll(".materia:not([data-lic])").length;
  const totalLic = document.querySelectorAll(".materia[data-lic]").length;

  const hechas = [...completadas].filter(id => {
    const el = document.querySelector(`[data-nombre="${id}"]`);
    return el && !el.dataset.lic;
  }).length;

  const hechasLic = [...completadas].filter(id => {
    const el = document.querySelector(`[data-nombre="${id}"]`);
    return el && el.dataset.lic;
  }).length;

  const porcentaje = Math.round((hechas / total) * 100);
  const porcentajeLic = Math.round((hechasLic / totalLic) * 100);

  document.getElementById("progreso-profesorado").style.width = `${porcentaje}%`;
  document.getElementById("progreso-profesorado").textContent = `Profesorado: ${porcentaje}%`;

  document.getElementById("progreso-licenciatura").style.width = `${porcentajeLic}%`;
  document.getElementById("progreso-licenciatura").textContent = `Licenciatura: ${porcentajeLic}%`;
}

materias.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;

    if (completadas.has(nombre)) {
      completadas.delete(nombre);
      boton.classList.remove("completada");
    } else {
      completadas.add(nombre);
      boton.classList.add("completada");
    }

    actualizarProgreso();
  });
});
