const mostrarSenha = document.getElementById("mostrarSenha");
const senhaInput = document.getElementById("senha");

mostrarSenha.addEventListener("click", () => {
  const tipo = senhaInput.getAttribute("type");
  senhaInput.setAttribute("type", tipo === "password" ? "text" : "password");
});

const entrarBtn = document.getElementById("entrarBtn");
entrarBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const senha = senhaInput.value;

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (tipo === "aluno") {
    window.location.href = "Aluno.html";
  } else if (tipo === "admin") {
    window.location.href = "Adm.html";
  }
});
