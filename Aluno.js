const alunoLogado = {
  nome: "Carlos Oliveira",
  serie: "3º Ano",
  email: "carlos@email.com"
};

document.getElementById("cardPontuacao").addEventListener("click", function () {
  window.location.href = "Pontuacao.html";
});

document.getElementById("btnPontuacao").addEventListener("click", function (e) {
  e.preventDefault();
  const pontuacaoDiv = document.getElementById("pontuacao");
  pontuacaoDiv.style.display = pontuacaoDiv.style.display === "block" ? "none" : "block";

  atualizarPontuacao();
});

function atualizarPontuacao() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const aluno = usuarios.find(u => u.email === alunoLogado.email);
  const pontuacaoElem = document.querySelector("#pontuacao p strong");

  if (pontuacaoElem) {
    pontuacaoElem.textContent = aluno ? `${aluno.pontuacao} pontos` : "0 pontos";
  }
}

function salvarResultado(quizId, score) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let aluno = usuarios.find(u => u.email === alunoLogado.email);

  if (aluno) {
    aluno.pontuacao = score;
    aluno.historico = aluno.historico || [];
    aluno.historico.push({ quizId, score, data: new Date().toISOString() });
  } else {
    usuarios.push({
      nome: alunoLogado.nome,
      serie: alunoLogado.serie,
      email: alunoLogado.email,
      pontuacao: score,
      historico: [{ quizId, score, data: new Date().toISOString() }]
    });
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  atualizarPontuacao();
}
