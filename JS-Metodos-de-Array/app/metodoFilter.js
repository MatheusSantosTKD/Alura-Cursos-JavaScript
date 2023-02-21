const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value 
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibeLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){

        exibeValorTotalDosLivros(livrosFiltrados)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalDosLivros(livrosFiltrados) {
    let valorSomadoDosLivros = livrosFiltrados.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
    sectionValorTotalDosLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorSomadoDosLivros}</span></p>
    </div>
  `
}