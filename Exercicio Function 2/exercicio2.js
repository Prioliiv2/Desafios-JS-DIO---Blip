// Lê as entradas do usuário
const canal = gets();
const cliente = gets();

// TODO: Imprima a mensagem de saudação personalizada no formato solicitado usando os valores lidos
function gerarSaudacao(canal, cliente) {
  return `Ola, ${cliente}! Bem-vindo ao canal ${canal}.`;
}
print(gerarSaudacao(canal, cliente));