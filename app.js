const contador = document.querySelector('[data-contador]');

const mudancaFome = document.querySelector('.texto-fome p');

const masote = document.querySelector('.masote');
const masotetite = document.querySelector('.masote-trite');

const botaoAlimentar = document.querySelector('[data-acao="alimentar"]');

const botaoFundo = document.querySelector('[data-acao="trocar-fundo"]');

botaoAlimentar.addEventListener("click", () => {

    let contadorAlimentos = parseInt(contador.dataset.contador, 10);

    contadorAlimentos++;

    contador.dataset.contador = contadorAlimentos;
    contador.textContent = contadorAlimentos;

    if(contador.textContent == 22)
    {
        mudancaFome.textContent = "O Galeto está feliz! 😸";

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