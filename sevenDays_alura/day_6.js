let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let bebidas = [];

let resposta;

do {
    resposta = prompt("Você gostaria de adicionar um alimento à lista de compras? (sim, não, ou remover)").toLowerCase();

    const listasTemItens = [frutas, laticinios, congelados, doces, bebidas].some(lista => lista.length > 0);

    if (resposta === 'remover') {
        if (!listasTemItens) {
            alert("Não há itens nas listas para remover.");
        } else {
            let categoria = prompt("De qual categoria você quer remover um item?\nOpções:\n- frutas\n- laticinios\n- congelados\n- doces\n- bebidas").toLowerCase();
            let listaSelecionada;

            switch (categoria) {
                case 'frutas':
                    listaSelecionada = frutas;
                    break;
                case 'laticinios':
                    listaSelecionada = laticinios;
                    break;
                case 'congelados':
                    listaSelecionada = congelados;
                    break;
                case 'doces':
                    listaSelecionada = doces;
                    break;
                case 'bebidas':
                    listaSelecionada = bebidas;
                    break;
                default:
                    alert("Categoria inválida!");
                    continue;
            }

            if (listaSelecionada.length === 0) {
                alert("Essa lista está vazia!");
            } else {
                let nomeParaRemover = prompt(`Itens na lista de ${categoria}: ${listaSelecionada.join(', ')}\nQual item deseja remover?`);

                const index = listaSelecionada.indexOf(nomeParaRemover);

                if (index !== -1) {
                    listaSelecionada.splice(index, 1);
                    alert(`"${nomeParaRemover}" foi removido da categoria "${categoria}".`);
                } else {
                    alert("Item não encontrado na lista.");
                }
            }
        }
    } else if (resposta === 'sim') {
        let alimento = prompt("Qual alimento você gostaria de adicionar?");
        let categoria = prompt("Em qual categoria ele se encaixa?\nOpções:\n- frutas\n- laticinios\n- congelados\n- doces\n- bebidas").toLowerCase();

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
                alert("Categoria inválida!");
                break;
        }
    } else if (resposta !== 'não') {
        alert("Resposta inválida. Digite apenas sim, não ou remover.");
    }

} while (resposta !== 'não');

let listaFinal = "Sua lista final:\n\n";
listaFinal += `Frutas: ${frutas.join(', ') || "nenhuma"}\n`;
listaFinal += `Laticínios: ${laticinios.join(', ') || "nenhum"}\n`;
listaFinal += `Congelados: ${congelados.join(', ') || "nenhum"}\n`;
listaFinal += `Doces: ${doces.join(', ') || "nenhum"}\n`;
listaFinal += `Bebidas: ${bebidas.join(', ') || "nenhuma"}\n`;

alert(listaFinal);