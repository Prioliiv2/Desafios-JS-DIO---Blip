const canal = gets();

// Função que retorna a saudação personalizada conforme o canal informado
function saudacaoBot(canal) {
  if (canal === "whatsapp") {
    return "Ola, este e o WhatsAppBot!";
  } else if (canal === "telegram") {
    return "Ola, este e o TelegramBot!";
  } else if (canal === "webchat") {
    return "Ola, este e o WebChatBot!";
  } else {
    return "Canal nao suportado";
  }
}

// Chama a função e imprime a resposta
print(saudacaoBot(canal));