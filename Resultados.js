const resultados = [
  { nome: "Larissa Santos", email: "larissa@email.com", pontuacao: 95 },
  { nome: "Pedro Almeida", email: "pedro@email.com", pontuacao: 88 },
  { nome: "Julia Costa", email: "julia@email.com", pontuacao: 79 },
  { nome: "Lucas Silva", email: "lucas@email.com", pontuacao: 75 },
];

resultados.sort((a, b) => b.pontuacao - a.pontuacao);

const podio = document.getElementById("podio");

resultados.slice(0, 3).forEach((aluno, index) => {
  const div = document.createElement("div");
  div.classList.add("colocacao");

  if (index === 0) div.classList.add("primeiro");
  else if (index === 1) div.classList.add("segundo");
  else if (index === 2) div.classList.add("terceiro");

  div.innerHTML = `
    <h2>${index + 1}º Lugar</h2>
    <p><strong>${aluno.nome}</strong></p>
    <p>${aluno.email}</p>
    <p>Pontuação: ${aluno.pontuacao}</p>
  `;

  podio.appendChild(div);
});
