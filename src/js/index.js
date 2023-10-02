const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll(".personagem")
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarbotao();
        desselecionarPersonagem();

        botao.classList.add('selecionado');



        personagem[indice].classList.add("selecionado")
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector('.botao.selecionado');
    botaoselecionado.classList.remove('selecionado');
}
