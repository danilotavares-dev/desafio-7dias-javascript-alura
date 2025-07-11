// eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
// No final, o sistema vai exibir a mensagem:
// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
// Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

let nome = prompt("Qual seu nome?\nDigite aqui: ");
let idade = prompt("Quantos anos você tem?\nDigite aqui: ");
let linguagem = prompt("Qual linguagem de programação você está aprendendo?\nDigite aqui: ");

if (idade <= 0) {
    alert("ERRO: Idade inválida.");
}

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let pergunta = prompt(`Você gosta de estudar ${linguagem}(1 para sim ou 2 para não)?\nDigite aqui: `);

switch (pergunta) {
    case 1:
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
        break;
    
    case 2:
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
        break;
    
    default:
        alert("ERRO: Valor Inválido.");
}