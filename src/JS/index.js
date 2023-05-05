const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener('click', () => {
            
            DesativarBotaoSelecionado();

            desativarBotaoSelecionado(botao);

            EsconderImagemAtiva();
            
            mostrarImagemDeFundo(indice);
            
                  
    })
}) 

function desativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
