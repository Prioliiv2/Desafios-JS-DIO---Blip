// 1. Captura a entrada do sistema de desafios
const entrada = gets();

// 2. Define a função que transforma o texto
function processarMensagem(texto) {
  return texto.toUpperCase();
}

// 3. Chama a função passando a 'entrada' e imprime o resultado
console.log(processarMensagem(entrada));