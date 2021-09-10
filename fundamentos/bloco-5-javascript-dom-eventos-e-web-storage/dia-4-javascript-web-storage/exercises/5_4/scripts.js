// Cor do fundo
const inputBackgroundColor = document.querySelector("#input-background-color");
const body = document.querySelector("body");

function corFundo() {

  body.style.backgroundColor = inputBackgroundColor.value;
}

inputBackgroundColor.addEventListener("keyup", corFundo);

// Cor do texto

const inputTextColor = document.querySelector("#input-text-color");
const article = document.querySelector("article");

function corTexto() {
  article.style.color = inputTextColor.value;
}

inputTextColor.addEventListener("keyup", corTexto);

// Tamanho da fonte

const inputTextSize = document.querySelector("#input-text-size");

function tamanhoTexto() {
  let valor = article.style.fontSize = inputTextSize.value;
  parseInt(valor);
}

inputTextSize.addEventListener("keyup", tamanhoTexto);