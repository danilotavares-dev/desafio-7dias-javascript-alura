// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.Aqui, a pessoa pode responder N tecnologias, uma de cada vez.Então, enquanto ela continuar respondendo ok para a pergunta:
//  “Tem mais alguma tecnologia que você gostaria de aprender ?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão.E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
let continuar;
let area = prompt("Você quer seguir a área de Front-End ou Back-End?\nDigite aqui: ").toLowerCase();

if (area == 'front-end') {
    prompt("Você deseja aprender React ou Vue?\nDigite aqui: ");
}

if (area == 'back-end') {
    prompt("Você deseja aprender C# ou Java?\nDigite aqui: ");
}

let decisao = prompt(`Você gostaria de continuar se especializando em ${area} ou seguir se desenvolvendo para se tornar Fullstack(1 para continuar ou 2 para se tornar fullstack)?\nDigite aqui: `);

if (decisao == 1) {
    alert(`ótimo! Continue se especializando em ${area}`);
}

else if (decisao == 2) {
    alert("Ótimo! Siga se desenvolvendo para se tornar um programador FullStack.");
}

else {
    alert("ERRO: Valor Inválido.");
}

const mensagens = ["Legal! Essa é uma ótima tecnologia.", "Ótimo! Tecnologia interessante.", "Maravilha! Acho essa tecnologia muito legal."];

do {
    let novaTEC = prompt("Qual tecnologia você gostaria de se especializar ou de conhecer?\nDigite aqui: ");
    const indice = (Math.floor(Math.random() * mensagens.length));
    alert(`${mensagens[indice]} você mencionou ${novaTEC}`);

    continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?\nSe sim digite 'ok', caso contrário digite qualquer outra coisa.\nDigite aqui: ").toLowerCase();

} while (continuar === 'ok');