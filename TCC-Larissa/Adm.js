function mostrarSecao(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'usuarios') {
    carregarUsuarios();
  }
}

function salvarQuiz() {
  const titulo = document.getElementById('quizTitulo').value.trim();
  const categoria = document.getElementById('quizCategoria').value;
  const descricao = document.getElementById('quizDescricao').value.trim();

  if (!titulo || !categoria || !descricao) {
    alert("⚠️ Preencha todos os campos antes de salvar!");
    return;
  }

  const quiz = { id: Date.now(), titulo, categoria, descricao };
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  quizzes.push(quiz);
  localStorage.setItem('quizzes', JSON.stringify(quizzes));

  listarQuizzes();
  limparCamposQuiz();
  alert("✅ Quiz criado com sucesso!");
}

function listarQuizzes() {
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  const lista = document.getElementById('listaQuizzes');
  lista.innerHTML = quizzes.length
    ? quizzes.map(q => `<li><strong>${q.titulo}</strong> — ${q.categoria}<br>${q.descricao}</li>`).join("")
    : "<p>Nenhum quiz criado ainda.</p>";
}

function limparCamposQuiz() {
  document.getElementById('quizTitulo').value = "";
  document.getElementById('quizCategoria').value = "";
  document.getElementById('quizDescricao').value = "";
}

function carregarUsuarios() {
  let usuarios;
  try {
    usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  } catch {
    usuarios = [];
  }

  if (usuarios.length === 0) {
    usuarios = [
      { nome: "Ana Silva", serie: "1º Ano", email: "ana@email.com", pontuacao: 85 },
      { nome: "João Souza", serie: "2º Ano", email: "joao@email.com", pontuacao: 92 }
    ];
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  const tabela = document.getElementById('tabelaUsuarios');
  tabela.innerHTML = usuarios.map(u =>
    `<tr>
      <td>${u.nome}</td>
      <td>${u.serie}</td>
      <td>${u.email}</td>
      <td>${u.pontuacao ?? 0}</td>
    </tr>`
  ).join("");
}

window.onload = () => {
  listarQuizzes();
  carregarUsuarios();
};
