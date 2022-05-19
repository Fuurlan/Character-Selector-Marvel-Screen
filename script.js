/* 
  Objetivo 1 - Quando passar mouse na foto temos que:

    * Colocar a classe personagem-selecionado, no personagem que passar o mouse;

    * Retirar a classe personagem-selecionado, do personagem que não está selecionado
  

  Objetivo 2 - Quando passar mouse na foto temos que trocar foto do personagem grande e o nome

    * Alterar imagem do personagem grande;
    * Alterar o nome do personagem selecionado;


*/

// Objetivo 1:

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    let idSelecionado = personagem.attributes.id.value;

    

    let personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');

    // Objetivo 2:    

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador1');
    //nomeJogador1.innerHTML = ''

    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado;   

    

  });
});


