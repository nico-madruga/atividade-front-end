# Projeto: Lista de Tarefas Modular
**Curso:** Técnico em Informática para a Internet
**Dupla:** Nicolas Madruga Sousa & Arthur Miguel Schlichting
---
## 📚 Diário de Aprendizagem e Documentação do Projeto
### 1. Estrutura do DOM e Seletores
* **Conceito de DOM e Nós (Explicado por Nicolas Madruga Sousa):**
>     O DOM (Document Object Model) é uma interface entre o programa e o navegador. Ele permite que o programa faça alterações no documento.
>     O DOM tem uma estrutura de árvore como abaixo:
> ![DOM example image](/dom_example.png)
>     Nós são todos estes elementos apresentados na estrutura DOM, como o Document, body, main, etc. 
>    Mas temo tipos diferentes de nós, os principais deles são os Nós de Elemento (os elementos HTML como header, main e footer) e os Nós de texto (O que tiver dentro de elementos como h1, por exemplo: "Title", "Header Content", "Main Content" e "Footer Content")

* **Métodos de Seleção (Explicado por Arthur Miguel Schlichting)::**
> Os métodos de seleção no CSS definem basicamente quais os elementos existem em um conjunto de regras onde o CSS se aplica. Eles 
> usam **tags: ("p")**, **classes: (".main")**, **ID: (#texto)** basicamente todas as formas de identificar um elemento no CSS. 
>
* **Document.querySelector()**
> ele retorna o primeiro elemento do documento que corresponde ao grupo especificado nos seletores.
```javascript
const element = document.querySelector(selectors);
```
>
* **Document.querySelectorAll()**
> é basicamente a mesma coisa q o anterior mas ele retorna uma lista de elementos no documento que coincidem com os seletores
```javascript
const elementList = document.querySelectorAll(selectors);
```
>
* **Element.querySelector()**
>
> retorna o primeiro elemento filho do elemento que foi chamado, 

```javascript
const elemento = elementoBase.querySelector(seletores);
```
>
* **Element.querySelectorAll()**
>
> retorna uma **NodeList** de todos os elementos filhos do elemento que foi chamado, 
```javascript
const elementList = baseElement.querySelectorAll(selectors);
```
>
* **NodeList()**
> é uma coleção de nós do DOM (elementos HTML, textos, comentários).
---
### 2. Eventos e Manipulação de Inputs
* **Escutadores de Eventos e preventDefault (Explicado por
Nicolas Madruga Sousa):**
> A função addEventListener adiciona um "sensor" para algum elemento específico que você atribuiu com o querySelectorAll, por exemplo:
```javascript
const botao = document.selectQuery("#botaoPrincipal");

botao.addEventListener("click", () => {
    //função
})
```

>Neste exemplo, é adicionado um sensor para agir quando houver um clique no botão principal, quando for clicado, executará o que estiver dentro da função.

>Porém, o navegador tem um comportamento padrão de recarregar a página sempre que fazemos alguma submissão de formulário, o que traz uma péssima experiência de usuário, então adicionamos a função event.preventDefault();
```javascript
const botao = document.selectQuery("#botaoPrincipal");

//adicionado um parâmetro para referenciar um evento
botao.addEventListener("click", (event) => {
    //função para evitar o recarregamento da página.
    event.preventDefault();
    //função
})
```
>Assim, evitamos o recarregamento automático da página.

* **Captura e Limpeza de Inputs (Explicado por Artur Miguel Schlichting):**
> *Explique como capturamos a propriedade .value do
input e fazemos a validação com .trim()...*
---
### 3. Criação e Remoção Dinâmica de Elementos
* **Criação de Nós Dinâmicos (Explicado por Nicolas Madruga Sousa):**
>O document.createElement cria um elemento novo direto da memória do navegador:
```javascript
const meuElemento = document.createElement('NOME_DA_TAG');
```

>O classList.add adiciona uma classe a algum elemento HTML:

```CSS
.sucesso {
    background-color: lightgreen;
    color: green;
    padding: 10px;
    border-radius: 5px;
}
```

```javascript
// 1. Cria o elemento
const alerta = document.createElement('div');
alerta.innerText = "Deu tudo certo!";

// 2. Adiciona a classe CSS que está no seu arquivo .css
alerta.classList.add('sucesso'); 

// No HTML interno, o elemento agora se parece com isso:
// <div class="sucesso">Deu tudo certo!</div>

// 3. Coloca na tela
document.body.appendChild(alerta);
```

>E o appendChild pega um elemento que você criou ou selecionou no JavaScript e o insere na tela, colocando-o como o último "filho" de um elemento pai:

```javascript
elementoPai.appendChild(elementoFilho);
```

* **Navegação no DOM e Exclusão (Explicado por Artur Miguel Schlichting):**
> *Explique como o parentElement localiza a tag pai e
como o método .remove() apaga a tarefa...*
---
### 4. Arquitetura Modular e Estilização
* **Módulos JS com import e export (Explicado por Nicolas Madruga Sousa):**
> *Um código em JS pode ficar muito extenso, com um código muito extenso, podemos acabar tendo nomes de variáveis confusos, conflitos de nomes, etc, sem contar que um código longo já é confuso por si só.
>A solução para este problema no JS foram os ES Modules, uma forma de dividir o código em vários arquivos separados. Para fazer isso, utilizamos duas palavras chaves:

>EXPORT:
```javascript
//arquivo: validacao.js
export function validarEmail(email) {
    return email.includes('@');
}

export function limparFormulario(form) {
    form.reset();
}
```

>Utilizamos o EXPORT para dizer que estamos exportando as funções desta classe para outra classe, e nesta outra classe devemos usar o:


>IMPORT:
```javascript
//arquivo: app.js
import { validarEmail, limparFormulario } from './validacao.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailDigitado = document.querySelector('#email').value;

    if (validarEmail(emailDigitado)) {
        console.log("E-mail válido!");
        limparFormulario(form);
    } else {
        alert("E-mail inválido!");
    }
});
```

>Na classe app.js, utilizamos o import para dizer que estamos utilizando recursos de outra classe, nesse caso, estamos utilizando funções da classe validacao.js

* **Integração entre JS e CSS (Explicado por Artur Miguel Schlichting):**
> *Explique como o JavaScript injeta classes CSS
dinamicamente na página...*