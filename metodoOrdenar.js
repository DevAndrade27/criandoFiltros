const btnOrdenar = document.getElementById("ordenar")

btnOrdenar.addEventListener("click", ordenarCrescente)

function ordenarCrescente(){
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco )
    exibirLivrosNaTela(livrosOrdenados)
}