document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pontuacoes-container");
  const btnReset = document.getElementById("btnReset");

  let resultados = JSON.parse(localStorage.getItem("resultados")) || [];

  if (resultados.length === 0) {
    container.innerHTML = `<p class="sem-dados">Nenhuma pontuação registrada ainda.</p>`;
    return;
  }

  resultados.forEach(r => {
    const card = document.createElement("div");
    card.classList.add("card-pontuacao");

    card.innerHTML = `
      <h3>${r.nome}</h3>
      <p><strong>Série/Faculdade:</strong> ${r.serie}</p>
      <p><strong>Quiz:</strong> ${r.quiz}</p>
      <p><strong>Pontuação:</strong> ${r.pontuacao}</p>
      <p class="data">${r.data}</p>
    `;

    container.appendChild(card);
  });

  btnReset.addEventListener("click", () => {
    if (confirm("Deseja realmente apagar todas as pontuações?")) {
      localStorage.removeItem("resultados");
      container.innerHTML = `<p class="sem-dados">Histórico apagado.</p>`;
    }
  });
});
