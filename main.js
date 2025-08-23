let livros = []
const endPointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    exibirLivrosNaTela(livros)
}