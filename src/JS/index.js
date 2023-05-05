const botoesCarrossel = document.querySelectorAll('.botao');

botoesCarrossel.forEach((botao) => {
   botao.addEventListener('click', () => {
          const botaoSelecionado =document.querySelector('.selecionado')
            botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
    })
})