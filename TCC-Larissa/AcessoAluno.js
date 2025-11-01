const ranking = [
  { nome: "Ana", pontos: 30 },
  { nome: "Bruno", pontos: 25 },
  { nome: "Carlos", pontos: 20 }
];

const entrarBtn = document.getElementById('entrarBtn');
const jogarBtn = document.getElementById('jogarBtn');
const rankingBtn = document.getElementById('rankingBtn');

let pontuacao = 0;

entrarBtn.addEventListener('click', () => {
  const nome = document.getElementById('alunoNome').value;
  if(nome.trim() === "") {
    alert("Digite seu nome!");
    return;
  }

  document.getElementById('nomeAluno').textContent = nome;
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block';
});

jogarBtn.addEventListener('click', () => {
  const pontosGanhos = Math.floor(Math.random() * 10) + 1;
  pontuacao += pontosGanhos;
  document.getElementById('pontuacao').textContent = pontuacao;
  alert(`Você ganhou ${pontosGanhos} pontos!`);
});

rankingBtn.addEventListener('click', () => {
  const rankingList = document.getElementById('rankingList');
  rankingList.innerHTML = "";
  const nomeAluno = document.getElementById('nomeAluno').textContent;

  const rankingAtual = [...ranking, {nome: nomeAluno, pontos: pontuacao}];
  rankingAtual.sort((a,b) => b.pontos - a.pontos);

  rankingAtual.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - ${item.pontos} pontos`;
    rankingList.appendChild(li);
  });

  document.getElementById('rankingContainer').style.display = 'block';
});
