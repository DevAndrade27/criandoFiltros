// Seleciona todos os botões de filtro que têm a classe .btn (ex.: .btn-front-end, .btn-back-end, etc.)
const botoes = document.querySelectorAll(".btn")
const valorTotalDisponiveis = document.getElementById("valor_total_livros_disponiveis")

// Para cada botão de filtro, registra o evento de clique chamando a função filtrarLivros
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))


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
            ? verificarDisponibilidade()
            : verificaCategoria(categoria)

    // Chama a função que exibe os livros filtrados na tela
    exibirLivrosNaTela(livrosFiltrados)

     // Sempre soma apenas os que estão disponíveis (quantidade > 0)
    let livrosDisponiveis = livrosFiltrados.filter(livro => livro.quantidade > 0)

    if(livrosDisponiveis.length > 0){
       let valorTotal = verificarValorTotal(livrosDisponiveis)
       console.log(valorTotal)
       exibirValorTotal(valorTotal)
    }else{
        valorTotalDisponiveis.innerHTML = ""
    }
}

function verificarDisponibilidade() {
    return livros.filter((livro) => livro.quantidade > 0);
}

function verificaCategoria(categoria) {
    return livros.filter((livro) => livro.categoria == categoria);
}



 function exibirValorTotal(valorTotal){
    valorTotalDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis dessa categoria por <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

