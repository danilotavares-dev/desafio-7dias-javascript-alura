// Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos como parâmetros e retornará com o resultado da operação.
// Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de operação até que a pessoa deseje parar o programa.
// Lembre-se também de que, além do if e else, também temos o switch, muito interessante de se utilizar em casos como esse, de múltipla escolha.
// Personalize a sua calculadora da maneira que achar mais legal, e não se esqueça de compartilhá - la no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode,
//     e também com #feedback7DoC caso você precise de alguma ajuda.

function soma(a , b) {
    return a + b;
}

function subtracao(a , b) {
    return a - b;
}

function multiplicacao(a , b) {
    return a * b;
}

function divisao(a , b) {
    return a / b;
}

let continuar;

do {

let operador = prompt("Escolha:\nSoma --> +\nSubtração --> -\nMultiplicação --> *\nDivisão --> /\n\nDigite aqui: ");

    let a = Number(prompt("Digite o primeiro valor: "));
    let b = Number(prompt("Digite o segundo valor: "))

    switch (operador) {
        case '+':
            alert(`resultado: ${soma(a, b)}`);
            break;
    
        case '-':
            alert(`resultado: ${subtracao(a, b)}`);
            break;
    
        case '*':
            alert(`resultado: ${multiplicacao(a, b)}`);
            break;
    
        case '/':
            if (b === 0) {
                alert("ERRO: Divisão por 0 não existe!");
            }
            else {
                alert(`resultado: ${divisao(a, b)}`);
            }
            break;
    
        default:
            alert("ERRO: Operador Inválido!!");
            break;
    }

    do {
        continuar = prompt("Deseja continuar(sim ou não)?\nDigite aqui: ").toLowerCase();
        if (continuar !== "sim" && continuar !== "nao") {
            alert("ERRO: Valor Inválido!!");
        }
    } while (continuar !== "sim" && continuar !== "nao");

} while (continuar === "sim");

alert("Até a próxima!!");