/* 
1) Exibindo valores dinâmicos em uma loja virtual
Você está desenvolvendo uma loja virtual de livros. 
A sua liderança solicitou uma funcionalidade que melhora a experiência do usuário ao filtrar livros por categoria.
 A ideia é que, ao selecionar uma categoria específica, 
 como "Livros de front-end", "Livros de back-end", "Livros de dados", ou "Todos os livros disponíveis", 
 a página deve atualizar dinamicamente o total do valor dos livros disponíveis para aquela categoria específica,
  em vez de exibir um valor fixo.

Atualmente, o site sempre mostra "todos os livros disponíveis por R$ 299,00" independentemente da categoria selecionada.
 Sua tarefa é ajustar o JavaScript para que, ao selecionar uma categoria, 
 o valor total dos livros disponíveis seja calculado dinamicamente com base nos livros que realmente estão sendo exibidos.

Considere que você tem acesso à API que retorna os dados dos livros,
 utilizada nos exercícios anteriores, incluindo preço e categoria.
  Use o método fetch para obter esses dados e implemente a lógica para atualizar o valor total 
  exibido na página conforme a categoria selecionada.
*/
function verificarValorTotal(livrosFiltrados){ 
    return livrosFiltrados
        .reduce((acc, livro) => acc + livro.preco, 0)
        .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
