function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const perguntas = [
  {
    pergunta: "1. Qual a função da BIOS em um computador?",
    opcoes: [
      { texto: "Inicializar o hardware e carregar o sistema operacional.", correta: true },
      { texto: "Armazenar arquivos do usuário.", correta: false },
      { texto: "Executar antivírus automaticamente.", correta: false }
    ]
  },
  {
    pergunta: "2. O que é RAID e para que serve?",
    opcoes: [
      { texto: "Conjunto de discos que aumenta desempenho ou segurança de dados.", correta: true },
      { texto: "Programa de limpeza de hardware.", correta: false },
      { texto: "Tipo de memória RAM avançada.", correta: false }
    ]
  },
  {
    pergunta: "3. Qual sinal indica que a fonte de alimentação pode estar falhando?",
    opcoes: [
      { texto: "Desligamentos repentinos e instabilidade do sistema.", correta: true },
      { texto: "Aumento da velocidade do processador.", correta: false },
      { texto: "Mais espaço no HD.", correta: false }
    ]
  },
  {
    pergunta: "4. Qual é a importância de monitorar a temperatura do CPU e GPU?",
    opcoes: [
      { texto: "Evitar superaquecimento e reduzir risco de danos permanentes.", correta: true },
      { texto: "Melhorar a aparência do computador.", correta: false },
      { texto: "Aumentar a memória RAM automaticamente.", correta: false }
    ]
  },
  {
    pergunta: "5. O que é POST (Power-On Self Test)?",
    opcoes: [
      { texto: "Teste inicial de hardware realizado pela BIOS ao ligar o PC.", correta: true },
      { texto: "Sistema de backup automático.", correta: false },
      { texto: "Configuração de rede sem fio.", correta: false }
    ]
  },
  {
    pergunta: "6. Qual ferramenta pode identificar setores defeituosos em um HD/SSD?",
    opcoes: [
      { texto: "CHKDSK ou softwares de diagnóstico do fabricante.", correta: true },
      { texto: "Paint.", correta: false },
      { texto: "Editor de texto.", correta: false }
    ]
  },
  {
    pergunta: "7. Qual medida preventiva evita curto-circuitos dentro do gabinete?",
    opcoes: [
      { texto: "Descarregar eletricidade estática e organizar cabos.", correta: true },
      { texto: "Usar apenas ventiladores grandes.", correta: false },
      { texto: "Aumentar a velocidade do HD.", correta: false }
    ]
  },
  {
    pergunta: "8. O que é overclock e qual risco ele oferece?",
    opcoes: [
      { texto: "Aumentar a frequência de componentes além do padrão, podendo gerar superaquecimento.", correta: true },
      { texto: "Atualizar drivers automaticamente.", correta: false },
      { texto: "Limpar poeira do gabinete.", correta: false }
    ]
  },
  {
    pergunta: "9. Como a limpeza de contatos de memória RAM ajuda na manutenção?",
    opcoes: [
      { texto: "Reduz falhas de leitura e melhora estabilidade do sistema.", correta: true },
      { texto: "Aumenta o tamanho da memória.", correta: false },
      { texto: "Garante que o HD fique mais rápido.", correta: false }
    ]
  },
  {
    pergunta: "10. Qual prática preventiva ajuda a prolongar a vida útil do SSD?",
    opcoes: [
      { texto: "Evitar gravações e apagamentos desnecessários.", correta: true },
      { texto: "Desfragmentar diariamente.", correta: false },
      { texto: "Desligar o computador apenas quando travar.", correta: false }
    ]
  }
];

let indice = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const resultadoEl = document.getElementById("resultado");
const botaoIniciar = document.getElementById("iniciar");
const blocoIdentificacao = document.getElementById("identificacao");

function mostrarPergunta() {
  quizContainer.innerHTML = "";

  if (indice >= perguntas.length) {
    quizContainer.style.display = "none";
    resultadoEl.style.display = "block";
    document.getElementById("pontuacaoFinal").textContent = `${score} de ${perguntas.length}`;

    const nome = document.getElementById("nome").value.trim();
    const serie = document.getElementById("serie").value.trim();

    if (nome && serie) {
      const resultadoAluno = {
        nome,
        serie,
        quiz: "Avançado",
        pontuacao: `${score} de ${perguntas.length}`,
        data: new Date().toLocaleString()
      };

      let resultados = JSON.parse(localStorage.getItem("resultados")) || [];
      resultados.push(resultadoAluno);
      localStorage.setItem("resultados", JSON.stringify(resultados));
    }

    return;
  }

  const p = perguntas[indice];
  const opcoesEmbaralhadas = embaralhar([...p.opcoes]);

  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = p.pergunta;
  card.appendChild(titulo);

  opcoesEmbaralhadas.forEach(op => {
    const botao = document.createElement("button");
    botao.textContent = op.texto;
    botao.classList.add("opcao");
    botao.onclick = () => {
      if (op.correta) score++;
      indice++;
      mostrarPergunta();
    };
    card.appendChild(botao);
  });

  quizContainer.appendChild(card);
}

botaoIniciar.addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  const serie = document.getElementById("serie").value.trim();

  if (!nome || !serie) {
    alert("Por favor, preencha seu nome e série/faculdade antes de iniciar o quiz!");
    return;
  }

  blocoIdentificacao.style.display = "none";
  quizContainer.style.display = "block";
  mostrarPergunta();
});

document.getElementById("reiniciar").addEventListener("click", () => {
  location.reload();
});
