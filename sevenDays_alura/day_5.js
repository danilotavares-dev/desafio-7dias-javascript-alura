// Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?
// Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.
// Depois que você resolver o desafio de hoje, com certeza não fará mais isso!
// Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.
// Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.
// Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.
// Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?
// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let bebidas = [];

let resposta;

do {
    resposta = prompt("Você gostaria de adicionar um alimento a lista?\nDigite aqui: ");

    if (resposta.toLowerCase() === 'sim') {
        alimento = prompt("Qual alimento você gostaria de adicionar?\nDigite aqui: ");
        categoria = prompt("Em qual categoria ele se encaixa?\nDigite aqui: ");

        switch (categoria) {
            case 'frutas':
                frutas.push(alimento);
                break;

            case 'laticinios':
                laticinios.push(alimento);
                break;

            case 'congelados':
                congelados.push(alimento);
                break;

            case 'doces':
                doces.push(alimento);
                break;

            case 'bebidas':
                bebidas.push(alimento);
                break;
            
            default:
                alert("ERRO: Por favor, digite uma categoria válida!");
                break;
        }
    }

    else if (resposta.toLowerCase() !== 'não') {
        alert("ERRO: Por favor, digite apenas sim ou não.");
    }

} while (resposta.toLowerCase() != 'não');

let listaFinal = "Sua lista final\n\n";

listaFinal += `Frutas: ${frutas.join(', ') || "nenhuma"}\n`;
listaFinal += `Laticínios: ${laticinios.join(', ') || "nenhuma"}\n`;
listaFinal += `Congelados: ${congelados.join(', ') || "nenhuma"}\n`;
listaFinal += `Doces: ${doces.join(', ') || "nenhuma"}\n`;
listaFinal += `Bebidas: ${bebidas.join(', ') || "nenhuma"}\n`;

alert(listaFinal);
