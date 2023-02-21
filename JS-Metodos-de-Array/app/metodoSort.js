const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordenaPrecos);

function ordenaPrecos() {
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}