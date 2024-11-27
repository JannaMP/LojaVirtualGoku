// Adiciona produtos ao carrinho
function adicionarProduto(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já existe no carrinho
    let produtoExistente = carrinho.find(produto => produto.nome === nome);
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(nome + " foi adicionado ao carrinho!");
}

// Exibe carrinho na página do carrinho (carrinho.html)
function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produtosCarrinho = document.getElementById('produtosCarrinho');
    produtosCarrinho.innerHTML = '';

    let total = 0;
    carrinho.forEach(produto => {
        let produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-carrinho');
        produtoDiv.innerHTML = `
            <p><strong>${produto.nome}</strong> - R$ ${produto.preco}</p>
            <input type="number" value="${produto.quantidade}" min="1" onchange="atualizarQuantidade('${produto.nome}', this.value)">
            <span>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</span>
        `;
        produtosCarrinho.appendChild(produtoDiv);

        total += produto.preco * produto.quantidade;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

// Atualiza quantidade no carrinho
function atualizarQuantidade(nome, quantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produto = carrinho.find(produto => produto.nome === nome);
    if (produto) {
        produto.quantidade = parseInt(quantidade);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

// Finaliza a compra
function finalizarCompra() {
    const usuarios = JSON.parse(sessionStorage.getItem("usersHere"))
    alert(`${usuarios.login} efetuou a compra com sucesso!!`)
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
}