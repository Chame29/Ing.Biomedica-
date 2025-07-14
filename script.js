const materias = [
  // SEMESTRE 1
  { name: "Cálculo Diferencial", prereq: [], creditos: 4, semestre: 1 },
  { name: "Química General y Orgánica", prereq: [], creditos: 3, semestre: 1 },
  { name: "Geometría", prereq: [], creditos: 3, semestre: 1 },
  { name: "Biología Celular", prereq: [], creditos: 3, semestre: 1 },
  { name: "Creatividad y diseño", prereq: [], creditos: 2, semestre: 1 },
  { name: "Introducción a la Ingeniería", prereq: [], creditos: 2, semestre: 1 },
  { name: "Técnicas para la Lectura y la Escritura", prereq: [], creditos: 2, semestre: 1 },
  { name: "Ciencias Políticas", prereq: [], creditos: 2, semestre: 1 },

  // SEMESTRE 2
  { name: "Cálculo Integral", prereq: ["Cálculo Diferencial"], creditos: 4, semestre: 2 },
  { name: "Física I", prereq: ["Geometría", "Cálculo Diferencial"], creditos: 4, semestre: 2 },
  { name: "Biología Molecular", prereq: ["Biología Celular", "Química General y Orgánica"], creditos: 3, semestre: 2 },
  { name: "Bioquímica", prereq: ["Biología Celular", "Química General y Orgánica"], creditos: 3, semestre: 2 },
  { name: "Álgebra Lineal", prereq: ["Geometría"], creditos: 3, semestre: 2 },
  { name: "Diseño Mecánico y Materiales", prereq: ["Geometría", "Creatividad y diseño"], creditos: 3, semestre: 2 },
  { name: "Diseño y Prototipado", prereq: ["Creatividad y diseño"], creditos: 2, semestre: 2 },
  { name: "Cátedra de sostenibilidad", prereq: [], creditos: 2, semestre: 2 },

  // SEMESTRE 3
  { name: "Ecuaciones Diferenciales", prereq: ["Cálculo Integral"], creditos: 4, semestre: 3 },
  { name: "Física II", prereq: ["Física I"], creditos: 4, semestre: 3 },
  { name: "Modelación y Simulación", prereq: ["Física I", "Diseño Mecánico y Materiales"], creditos: 3, semestre: 3 },
  { name: "Programación I", prereq: ["Álgebra Lineal"], creditos: 3, semestre: 3 },
  { name: "Sistema de Seguridad Social Integral", prereq: [], creditos: 2, semestre: 3 },
  { name: "Morfofisiología I", prereq: ["Biología Molecular", "Bioquímica"], creditos: 3, semestre: 3 },
  { name: "Antropología general", prereq: [], creditos: 2, semestre: 3 },

  // SEMESTRE 4
  { name: "Cálculo de Varias Variables", prereq: ["Cálculo Integral"], creditos: 4, semestre: 4 },
  { name: "Biomateriales e Ingeniería de Tejidos", prereq: ["Modelación y Simulación", "Morfofisiología I"], creditos: 3, semestre: 4 },
  { name: "Electrónica y Circuitos I", prereq: ["Cálculo Integral", "Programación I"], creditos: 3, semestre: 4 },
  { name: "Algoritmos y Estructuras de Datos", prereq: ["Programación I"], creditos: 3, semestre: 4 },
  { name: "Morfofisiología II", prereq: ["Morfofisiología I"], creditos: 3, semestre: 4 },
  { name: "Fenómenos de Transporte", prereq: ["Ecuaciones Diferenciales"], creditos: 3, semestre: 4 },
  { name: "Programación II", prereq: ["Programación I"], creditos: 3, semestre: 4 },
  { name: "Administración General y en Salud", prereq: ["Sistema de Seguridad Social Integral"], creditos: 2, semestre: 4 },

  // SEMESTRE 5
  { name: "Electrónica y Circuitos II", prereq: ["Electrónica y Circuitos I"], creditos: 3, semestre: 5 },
  { name: "Biotecnología en Salud", prereq: ["Biomateriales e Ingeniería de Tejidos"], creditos: 3, semestre: 5 },
  { name: "Ciencia de Datos", prereq: ["Algoritmos y Estructuras de Datos"], creditos: 3, semestre: 5 },
  { name: "Biomecánica", prereq: ["Algoritmos y Estructuras de Datos"], creditos: 3, semestre: 5 },
  { name: "Seminario de Investigación e Innovación", prereq: [], creditos: 2, semestre: 5 },
  { name: "Bioestadística", prereq: ["Cálculo de Varias Variables"], creditos: 3, semestre: 5 },
  { name: "Economía y sociedad", prereq: [], creditos: 2, semestre: 5 },
  { name: "Ética general", prereq: [], creditos: 2, semestre: 5 },

  // SEMESTRE 6
  { name: "Técnicas en Cultivo Celular", prereq: ["Biomateriales e Ingeniería de Tejidos"], creditos: 3, semestre: 6 },
  { name: "Electiva de Profundización I", prereq: [], creditos: 3, semestre: 6 },
  { name: "Electiva de Profundización II", prereq: [], creditos: 3, semestre: 6 },
  { name: "Ingeniería de Rehabilitación", prereq: ["Biomecánica"], creditos: 3, semestre: 6 },
  { name: "Equipos Biomédicos", prereq: [], creditos: 3, semestre: 6 },
  { name: "Gestión de Proyectos", prereq: [], creditos: 2, semestre: 6 },
  { name: "Proyecto de Investigación e Innovación I", prereq: ["Seminario de Investigación e Innovación"], creditos: 3, semestre: 6 },
  { name: "Electiva sociohumanística I", prereq: [], creditos: 2, semestre: 6 },

  // SEMESTRE 7
  { name: "Inteligencia artificial en salud", prereq: ["Ciencia de Datos"], creditos: 3, semestre: 7 },
  { name: "Electiva de Profundización III", prereq: [], creditos: 3, semestre: 7 },
  { name: "Electiva de Profundización IV", prereq: [], creditos: 3, semestre: 7 },
  { name: "Gestión y Evaluación de la Tecnología en Salud", prereq: ["Administración General y en Salud"], creditos: 2, semestre: 7 },
  { name: "Desarrollo de Habilidades sociales", prereq: [], creditos: 2, semestre: 7 },
  { name: "Proyecto de Investigación e Innovación II", prereq: ["Proyecto de Investigación e Innovación I"], creditos: 3, semestre: 7 },
  { name: "Bioética", prereq: [], creditos: 2, semestre: 7 },

  // SEMESTRE 8
  { name: "Electiva sociohumanística II", prereq: [], creditos: 2, semestre: 8 },

  // SEMESTRE 9 (Prácticas)
  { name: "Práctica de Profundización I", prereq: ["Desarrollo de Habilidades sociales"], creditos: 6, semestre: 9 },
  { name: "Práctica de Profundización II", prereq: ["Práctica de Profundización I"], creditos: 6, semestre: 9 }
];

const aprobadas = new Set();

function renderMalla() {
  const cont = document.getElementById('mallaContainer');
  cont.innerHTML = '';

  const semestres = [...new Set(materias.map(m => m.semestre))].sort((a, b) => a - b);

  semestres.forEach(sem => {
    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${sem}`;
    titulo.className = 'semestre-titulo';

    const grid = document.createElement('div');
    grid.className = 'malla';

    materias
      .filter(m => m.semestre === sem)
      .forEach(m => {
        const div = document.createElement('div');
        div.className = 'materia';
        div.innerHTML = `
          <strong>${m.name}</strong><br>
          Créditos: ${m.creditos}<br>
          ${m.prereq.length > 0 ? `Requiere: ${m.prereq.join(', ')}` : ''}
        `;

        if (aprobadas.has(m.name)) {
          div.classList.add('approved');
        } else if (!m.prereq.every(p => aprobadas.has(p))) {
          div.classList.add('locked');
        }

        div.addEventListener('click', () => toggleMateria(m));
        grid.appendChild(div);
      });

    cont.appendChild(titulo);
    cont.appendChild(grid);
  });
}

function toggleMateria(materia) {
  if (!materia.prereq.every(p => aprobadas.has(p))) return;

  if (aprobadas.has(materia.name)) {
    aprobadas.delete(materia.name);
  } else {
    aprobadas.add(materia.name);
  }
  renderMalla();
}

renderMalla();
