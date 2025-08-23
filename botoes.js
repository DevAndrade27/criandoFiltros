// Seleciona todos os botões de filtro que têm a classe .btn (ex.: .btn-front-end, .btn-back-end, etc.)
const botoes = document.querySelectorAll(".btn")

// Seleciona o botão que deve recarregar a página (classe .todos)
const reload = document.querySelector(".todos")

// Para cada botão de filtro, registra o evento de clique chamando a função filtrarLivros
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

// Quando o botão .todos for clicado, recarrega a página para voltar à lista original
reload.addEventListener("click", () => {
    location.reload(); // força o reload do documento atual
})

// Função chamada ao clicar em qualquer botão de filtro
function filtrarLivros(){
    // Pega o elemento do botão clicado pelo seu id (this.id vem do botão que disparou o evento)
    // Obs.: poderia usar diretamente `const categoria = this.value` se o botão tiver atributo value.
    const elementosBtn = document.getElementById(this.id)

    // Lê o valor do atributo value do botão (ex.: "front-end", "back-end", "dados" ou "disponivel")
    const categoria = elementosBtn.value

    // Cria a lista filtrada de livros:
    // - Se a categoria for "disponivel", filtra apenas livros com quantidade > 0
    // - Caso contrário, filtra pela categoria exata do livro
    let livrosFiltrados = 
        categoria == "disponivel"
            ? livros.filter((livro) => livro.quantidade > 0)
            : livros.filter((livro) => livro.categoria == categoria)

    // Chama a função que exibe os livros filtrados na tela
    exibirLivrosNaTela(livrosFiltrados)
}
