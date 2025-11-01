function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const perguntas = [
  { pergunta: "1. Qual a consequência do acúmulo de poeira nos dissipadores de calor?", opcoes: [{ texto: "Redução da eficiência na refrigeração.", correta: true }, { texto: "Aumento automático da memória RAM.", correta: false }, { texto: "Melhora na velocidade do processador.", correta: false }] },
  { pergunta: "2. Por que a troca da pasta térmica é importante?", opcoes: [{ texto: "Melhora a transferência de calor entre CPU e cooler.", correta: true }, { texto: "Aumenta a capacidade de armazenamento.", correta: false }, { texto: "Evita a perda de dados do HD.", correta: false }] },
  { pergunta: "3. Qual é a principal função de realizar desfragmentação no HD?", opcoes: [{ texto: "Organizar os arquivos para melhorar o desempenho.", correta: true }, { texto: "Eliminar todos os vírus do computador.", correta: false }, { texto: "Diminuir a temperatura do processador.", correta: false }] },
  { pergunta: "4. O que pode ocorrer se os conectores internos ficarem frouxos?", opcoes: [{ texto: "Falhas na inicialização ou desligamentos repentinos.", correta: true }, { texto: "Mais memória disponível.", correta: false }, { texto: "Aumento do desempenho gráfico.", correta: false }] },
  { pergunta: "5. Qual a vantagem de usar um SSD em vez de um HD tradicional?", opcoes: [{ texto: "Maior velocidade e menor risco de falhas mecânicas.", correta: true }, { texto: "Mais capacidade de armazenamento por menor preço.", correta: false }, { texto: "Resfriamento automático do processador.", correta: false }] },
  { pergunta: "6. Como o excesso de programas iniciando junto com o Windows afeta o sistema?", opcoes: [{ texto: "Deixa a inicialização mais lenta.", correta: true }, { texto: "Aumenta a memória RAM disponível.", correta: false }, { texto: "Resfria automaticamente o computador.", correta: false }] },
  { pergunta: "7. Qual ferramenta do Windows pode verificar a integridade do disco rígido?", opcoes: [{ texto: "CHKDSK.", correta: true }, { texto: "Paint.", correta: false }, { texto: "Calculadora.", correta: false }] },
  { pergunta: "8. Qual prática ajuda a aumentar a vida útil da bateria de notebooks?", opcoes: [{ texto: "Evitar ciclos completos constantes de carga e descarga.", correta: true }, { texto: "Deixar sempre conectado sem parar.", correta: false }, { texto: "Não atualizar o sistema.", correta: false }] },
  { pergunta: "9. Qual a consequência de cabos SATA mal conectados?", opcoes: [{ texto: "Falhas na leitura e escrita de dados.", correta: true }, { texto: "Mais espaço livre no disco.", correta: false }, { texto: "Aumento da velocidade da internet.", correta: false }] },
  { pergunta: "10. Por que é importante manter drivers atualizados?", opcoes: [{ texto: "Melhora compatibilidade, segurança e desempenho.", correta: true }, { texto: "Deixa o computador mais bonito.", correta: false }, { texto: "Aumenta o espaço do HD.", correta: false }] }
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
      let resultados = JSON.parse(localStorage.getItem("resultados")) || [];
      resultados.push({ nome, serie, quiz: "Quiz Intermediário", pontuacao: `${score} de ${perguntas.length}`, data: new Date().toLocaleString() });
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
