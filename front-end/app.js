import { deletarTarefa } from "./deleteTarefa.js";

//Bloco 1
const contador = document.querySelector('[data-contador]');
const mudancaFome = document.querySelector('.texto-fome p');
const masote = document.querySelector('.masote');
const masotetite = document.querySelector('.masote-trite');
const botaoAlimentar = document.querySelector('[data-acao="alimentar"]');
const botaoFundo = document.querySelector('[data-acao="trocar-fundo"]');
const listaContainer = document.querySelector('#lista-tarefas-container');


botaoAlimentar.addEventListener("click", (event) => {
    event.preventDefault();

    let mensagem = inserir.value.trim();

    if (mensagem === "") {
        return;
    }

    let contadorAlimentos = parseInt(contador.dataset.contador, 10);

    contadorAlimentos++;

    contador.dataset.contador = contadorAlimentos;
    contador.textContent = contadorAlimentos;

    console.log(`O Galeto Master comeu ${contadorAlimentos} de ${mensagem}`)



    if (contador.textContent == 22) {
        mudancaFome.textContent = "O Galeto está feliz! 😸";
        alert('O Galeto está satisfeito.');

        masotetite.style.display = "none";
        masote.style.display = "block";
    }
});



function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

botaoFundo.addEventListener("click", () => {
    document.body.style.backgroundColor = gerarCorAleatoria();
})

//Bloco 3

const checkcaixa = document.createElement('input');
const nomeTarefa = document.createElement('input');
const adicionar = document.createElement('button');
const lista = document.querySelector('.lista-tarefas');

checkcaixa.type = "checkbox";
nomeTarefa.placeholder = "Insira o nome da tarefa: ";
adicionar.textContent = "Adicionar";

listaContainer.appendChild(nomeTarefa);
listaContainer.appendChild(adicionar);
adicionar.dataset.userInput = "";

/**
 * Ele acessa o elemento filho criado para acessar o elemento pai no HTML e remove o pai acessando o filho
 * botaoFundo.parentElement.remove();
 */

//Bloco 4

adicionar.addEventListener("click", () => {
    const valorDigitato = nomeTarefa.value;

    if (valorDigitato.trim() === "") return;

    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = valorDigitato;

    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = "Excluir";

    botaoDeletar.addEventListener("click", deletarTarefa);

    const checkcaixa = document.createElement('input');
    checkcaixa.type = "checkbox";

    novaTarefa.appendChild(checkcaixa);
    novaTarefa.appendChild(botaoDeletar);
    lista.appendChild(novaTarefa);

});