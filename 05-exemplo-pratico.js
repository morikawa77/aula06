// Criação de uma aplicação simples em JavaScript:
// Vamos criar um contador que aumenta a cada clique em um botão.
// Manipulação de eventos e DOM:
// Usaremos um evento click para atualizar o contador:

let contador = 0;
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", () => {
  contador++;
  document.getElementById("resultado").innerHTML = contador;
});
