const perguntas = [
  {
    pergunta: "1. O que é manutenção preventiva em computadores?",
    opcoes: [
      { texto: "Limpeza e cuidados regulares para evitar falhas.", correta: true },
      { texto: "Conserto após o computador quebrar.", correta: false },
      { texto: "Instalar jogos e programas.", correta: false }
    ]
  },
  {
    pergunta: "2. Por que limpar a poeira do gabinete é importante?",
    opcoes: [
      { texto: "Evita superaquecimento.", correta: true },
      { texto: "Deixa o PC mais bonito.", correta: false },
      { texto: "Aumenta a memória RAM.", correta: false }
    ]
  },
  {
    pergunta: "3. Qual item deve ser higienizado para evitar acúmulo de germes?",
    opcoes: [
      { texto: "Placa-mãe.", correta: false },
      { texto: "Teclado e mouse.", correta: true },
      { texto: "Fonte de energia.", correta: false }
    ]
  },
  {
    pergunta: "4. O cooler do processador serve para:",
    opcoes: [
      { texto: "Resfriar os componentes.", correta: true },
      { texto: "Aumentar o desempenho do HD.", correta: false },
      { texto: "Gerar energia.", correta: false }
    ]
  },
  {
    pergunta: "5. O que acontece se o computador não for desligado corretamente?",
    opcoes: [
      { texto: "Pode causar falhas no sistema.", correta: true },
      { texto: "Aumenta a velocidade.", correta: false },
      { texto: "Nada acontece.", correta: false }
    ]
  },
  {
    pergunta: "6. Qual produto é ideal para limpar a tela do monitor?",
    opcoes: [
      { texto: "Pano de microfibra levemente úmido.", correta: true },
      { texto: "Detergente de cozinha.", correta: false },
      { texto: "Água em excesso.", correta: false }
    ]
  },
  {
    pergunta: "7. Manter softwares atualizados ajuda em quê?",
    opcoes: [
      { texto: "Na segurança e desempenho do sistema.", correta: true },
      { texto: "Apenas deixa o PC lento.", correta: false },
      { texto: "Não tem importância.", correta: false }
    ]
  },
  {
    pergunta: "8. O uso de filtros de linha serve para:",
    opcoes: [
      { texto: "Proteger contra picos de energia.", correta: true },
      { texto: "Melhorar os gráficos.", correta: false },
      { texto: "Aumentar a internet.", correta: false }
    ]
  },
  {
    pergunta: "9. Onde NÃO se deve usar aspirador de pó comum?",
    opcoes: [
      { texto: "Dentro do gabinete.", correta: true },
      { texto: "No teclado.", correta: false },
      { texto: "Na mesa.", correta: false }
    ]
  },
  {
    pergunta: "10. Qual sintoma indica poeira acumulada no computador?",
    opcoes: [
      { texto: "Superaquecimento e barulho do cooler.", correta: true },
      { texto: "Mais memória disponível.", correta: false },
      { texto: "Melhora no desempenho.", correta: false }
    ]
  }
];

let indice = 0;
let score = 0;

const boxDados = document.getElementById("boxDados");
const quizContainer = document.getElementById("quiz");
const resultadoEl = document.getElementById("resultado");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const fraseMotivadora = document.getElementById("fraseMotivadora");
const iniciarBtn = document.getElementById("iniciar");

function mostrarPergunta() {
  quizContainer.innerHTML = "";
  if (indice >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  const p = perguntas[indice];

  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = p.pergunta;
  card.appendChild(titulo);

  p.opcoes.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.classList.add("opcao");
    btn.onclick = () => {
      if (op.correta) score++;
      indice++;
      mostrarPergunta();
    };
    card.appendChild(btn);
  });

  quizContainer.appendChild(card);
  quizContainer.style.display = "block";
}

function getFrase(score, total) {
  const perc = (score / total) * 100;
  if (perc >= 90) return "Excelente! Continue assim e você vai longe!";
  if (perc >= 70) return "Muito bom! Um pouco mais de esforço e será perfeito!";
  if (perc >= 50) return "Bom! Continue praticando para melhorar ainda mais!";
  return "Não desanime! Cada tentativa é um passo para aprender!";
}

function finalizarQuiz() {
  quizContainer.style.display = "none";
  resultadoEl.style.display = "block";
  pontuacaoFinal.textContent = `${score} de ${perguntas.length}`;
  fraseMotivadora.textContent = getFrase(score, perguntas.length);
}

document.getElementById("reiniciar").addEventListener("click", () => location.reload());

iniciarBtn.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const serie = document.getElementById("serie").value;

  if (!nome || !serie) {
    alert("Preencha nome e série para iniciar!");
    return;
  }

  boxDados.style.display = "none";
  mostrarPergunta();
});
