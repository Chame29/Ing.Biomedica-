// Definición de materias y prerrequisitos
const materias = [
  { name: "Cálculo Diferencial", prereq: [] },
  { name: "Química General y Orgánica", prereq: [] },
  { name: "Geometría", prereq: [] },
  { name: "Biología Celular", prereq: [] },
  { name: "Creatividad y diseño", prereq: [] },
  { name: "Introducción a la Ingeniería", prereq: [] },
  { name: "Técnicas para la Lectura y la Escritura", prereq: [] },
  { name: "Ciencias Políticas", prereq: [] },

  { name: "Cálculo Integral", prereq: ["Cálculo Diferencial"] },
  { name: "Física I", prereq: ["Geometría", "Cálculo Diferencial"] },
  { name: "Biología Molecular", prereq: ["Biología Celular", "Química General y Orgánica"] },
  { name: "Bioquímica", prereq: ["Biología Celular", "Química General y Orgánica"] },
  { name: "Álgebra Lineal", prereq: ["Geometría"] },
  { name: "Diseño Mecánico y Materiales", prereq: ["Geometría", "Creatividad y diseño"] },
  { name: "Diseño y Prototipado", prereq: ["Creatividad y diseño"] },
  { name: "Cátedra de sostenibilidad", prereq: [] },

  { name: "Ecuaciones Diferenciales", prereq: ["Cálculo Integral"] },
  { name: "Física II", prereq: ["Física I"] },
  { name: "Modelación y Simulación", prereq: ["Física I", "Diseño Mecánico y Materiales"] },
  { name: "Programación I", prereq: ["Álgebra Lineal"] },
  { name: "Sistema de Seguridad Social Integral", prereq: [] },
  { name: "Morfofisiología I", prereq: ["Biología Molecular", "Bioquímica"] },
  { name: "Antropología general", prereq: [] },

  { name: "Cálculo de Varias Variables", prereq: ["Cálculo Integral"] },
  { name: "Biomateriales e Ingeniería de Tejidos", prereq: ["Modelación y Simulación", "Morfofisiología I"] },
  { name: "Electrónica y Circuitos I", prereq: ["Cálculo Integral", "Programación I"] },
  { name: "Algoritmos y Estructuras de Datos", prereq: ["Programación I"] },
  { name: "Morfofisiología II", prereq: ["Morfofisiología I"] },
  { name: "Fenómenos de Transporte", prereq: ["Ecuaciones Diferenciales"] },
  { name: "Programación II", prereq: ["Programación I"] },
  { name: "Administración General y en Salud", prereq: ["Sistema de Seguridad Social Integral"] },

  { name: "Electrónica y Circuitos II", prereq: ["Electrónica y Circuitos I"] },
  { name: "Biotecnología en Salud", prereq: ["Biomateriales e Ingeniería de Tejidos"] },
  { name: "Ciencia de Datos", prereq: ["Algoritmos y Estructuras de Datos"] },
  { name: "Biomecánica", prereq: ["Algoritmos y Estructuras de Datos"] },
  { name: "Seminario de Investigación e Innovación", prereq: [] },
  { name: "Bioestadística", prereq: ["Cálculo de Varias Variables"] },
  { name: "Economía y sociedad", prereq: [] },
  { name: "Ética general", prereq: [] },

  { name: "Técnicas en Cultivo Celular", prereq: ["Biomateriales e Ingeniería de Tejidos"] },
  { name: "Electiva de Profundización I", prereq: [] },
  { name: "Electiva de Profundización II", prereq: [] },
  { name: "Ingeniería de Rehabilitación", prereq: ["Biomecánica"] },
  { name: "Equipos Biomédicos", prereq: [] },
  { name: "Gestión de Proyectos", prereq: [] },
  { name: "Proyecto de Investigación e Innovación I", prereq: ["Seminario de Investigación e Innovación"] },
  { name: "Electiva sociohumanística I", prereq: [] },

  { name: "Inteligencia artificial en salud", prereq: ["Ciencia de Datos"] },
  { name: "Electiva de Profundización III", prereq: [] },
  { name: "Electiva de Profundización IV", prereq: [] },
  { name: "Gestión y Evaluación de la Tecnología en Salud", prereq: ["Administración General y en Salud"] },
  { name: "Desarrollo de Habilidades sociales", prereq: [] },
  { name: "Proyecto de Investigación e Innovación II", prereq: ["Proyecto de Investigación e Innovación I"] },
  { name: "Bioética", prereq: [] },

  { name: "Práctica de Profundización I", prereq: ["Desarrollo de Habilidades sociales"] },
  { name: "Electiva sociohumanística II", prereq: [] },
  { name: "Práctica de Profundización II", prereq: ["Práctica de Profundización I"] }
];

// Conjunto de aprobadas
const aprobadas = new Set();

// Generar el grid
function renderMalla() {
  const cont = document.getElementById('malla');
  cont.innerHTML = '';
  materias.forEach(m => {
    const div = document.createElement('div');
    div.textContent = m.name;
    div.className = 'materia';
    // Si ya aprobada
    if (aprobadas.has(m.name)) {
      div.classList.add('approved');
    }
    // Si no puede desbloquearse (le faltan prerrequisitos)
    else if (!m.prereq.every(r => aprobadas.has(r))) {
      div.classList.add('locked');
    }
    // Si está desbloqueada
    div.addEventListener('click', () => toggleMateria(m));
    cont.appendChild(div);
  });
}

// Toggle de aprobación
function toggleMateria(materia) {
  // Si está bloqueada, no hace nada
  if (!materia.prereq.every(r => aprobadas.has(r))) return;

  if (aprobadas.has(materia.name)) {
    aprobadas.delete(materia.name);
  } else {
    aprobadas.add(materia.name);
  }
  renderMalla();
}

// Inicializar
renderMalla();
