
// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando ? Hoje você vai voltar na infância e fazer exatamente isso.Mas agora, o jogo vai ser contra o próprio computador!
// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

const max = 10;
const min = 0;

const random = Math.floor(Math.random() * (max - min + 1) + min);

let adivinhar;
let chances = 0;

while (chances < 3) {
    adivinhar = prompt("Tente adivinhar o número aleatório entre 0 - 10 (3 tentativas): ")
    adivinhar = Number(adivinhar);

    if (isNaN(adivinhar) || adivinhar < min || adivinhar > max) {
        alert("ERRO: Por favor, digite um número válido entre 0 e 10.");
        continue;
    }

    if (adivinhar === random) {
        alert("Parabéns, você acertou o número aleatório!!");
        break;
    }
    
    else {
        if (adivinhar < random) {
            alert("dica: O número é MAIOR que isso.");
        }
        
        else {
            alert("dica: O número é MENOR que isso.");
        }

    }
    chances++;
}

if (adivinhar !== random) {
    alert("Infelizmente você não conseguiu...");
    alert(`O número aleatório era ${random}`);
}