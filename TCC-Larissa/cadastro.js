const toggleSenha = document.getElementById("toggleSenha");
const senha = document.getElementById("senha");

toggleSenha.addEventListener("click", () => {
  senha.type = senha.type === "password" ? "text" : "password";
});

const toggleConfirmarSenha = document.getElementById("toggleConfirmarSenha");
const confirmarSenha = document.getElementById("confirmarSenha");

toggleConfirmarSenha.addEventListener("click", () => {
  confirmarSenha.type = confirmarSenha.type === "password" ? "text" : "password";
});

document.getElementById("cadastroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const classe = document.getElementById("classe").value;
  const senhaVal = senha.value;
  const confirmarSenhaVal = confirmarSenha.value;

  if (senhaVal !== confirmarSenhaVal) {
    alert("As senhas não coincidem!");
    return;
  }

  if (!classe) {
    alert("Selecione sua classe ou série!");
    return;
  }

  alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\nClasse: ${classe}`);
  this.reset();
});
