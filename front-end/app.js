//Bloco 1
const contador = document.querySelector('[data-contador]');
const mudancaFome = document.querySelector('.texto-fome p');
const masote = document.querySelector('.masote');
const masotetite = document.querySelector('.masote-trite');
const botaoAlimentar = document.querySelector('[data-acao="alimentar"]');
const botaoFundo = document.querySelector('[data-acao="trocar-fundo"]');

let devorado = false;

botaoAlimentar.addEventListener("click", (event) => {
    event.preventDefault();

    let mensagem = inserir.value.trim();

    if(mensagem === ""){
        return;
    }

    let contadorAlimentos = parseInt(contador.dataset.contador, 10);

    contadorAlimentos++;

    contador.dataset.contador = contadorAlimentos;
    contador.textContent = contadorAlimentos;
    
    console.log(`O Galeto Master comeu ${contadorAlimentos} de ${mensagem}`)

    if (contador.textContent == 22) {
        mudancaFome.textContent = "O Galeto está feliz! 😸";

        masotetite.style.display = "none";
        masote.style.display = "block";

        devorado = true;

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

//Bloco 2

const inserir = document.querySelector('#inserir');
const botaoEnviar = document.querySelector('#enviar');

/**
 * botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    let mensagem = inserir.value.trim();

    if(mensagem === ""){
        return;
    }

    let contadorAlimentos = parseInt(contador.dataset.contador, 10);

    contadorAlimentos++;

    contador.dataset.contador = contadorAlimentos;
    contador.textContent = contadorAlimentos;
    
    console.log(`O Galeto Master comeu ${contadorAlimentos} de ${mensagem}`)
});
 */
