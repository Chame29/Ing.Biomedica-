const materias = [
  { name: "Cálculo Diferencial", prereq: [], creditos: 4, semestre: 1 },
  { name: "Química General y Orgánica", prereq: [], creditos: 3, semestre: 1 },
  { name: "Geometría", prereq: [], creditos: 3, semestre: 1 },
  { name: "Biología Celular", prereq: [], creditos: 3, semestre: 1 },
  { name: "Creatividad y diseño", prereq: [], creditos: 2, semestre: 1 },
  { name: "Introducción a la Ingeniería", prereq: [], creditos: 2, semestre: 1 },
  { name: "Técnicas para la Lectura y la Escritura", prereq: [], creditos: 2, semestre: 1 },
  { name: "Ciencias Políticas", prereq: [], creditos: 2, semestre: 1 },

  { name: "Cálculo Integral", prereq: ["Cálculo Diferencial"], creditos: 4, semestre: 2 },
  { name: "Física I", prereq: ["Geometría", "Cálculo Diferencial"], creditos: 4, semestre: 2 },
  { name: "Biología Molecular", prereq: ["Biología Celular", "Química General y Orgánica"], creditos: 3, semestre: 2 },
  { name: "Bioquímica", prereq: ["Biología Celular", "Química General y Orgánica"], creditos: 3, semestre: 2 },
  { name: "Álgebra Lineal", prereq: ["Geometría"], creditos: 3, semestre: 2 },
  { name: "Diseño Mecánico y Materiales", prereq: ["Geometría", "Creatividad y diseño"], creditos: 3, semestre: 2 },
  { name: "Diseño y Prototipado", prereq: ["Creatividad y diseño"], creditos: 2, semestre: 2 },
  { name: "Cátedra de sostenibilidad", prereq: [], creditos: 2, semestre: 2 }

  // Puedes seguir agregando el resto de materias con su semestre y créditos
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
