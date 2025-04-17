const produtos = [
    {
    nome: "Camiseta",
    preco: 49.9,
    imagem:
    "https://picsum.photos/150?1",
    href: "ex3.html",
    },
    {
    nome: "Tênis",
    preco: 199.9,
    imagem:
    "https://picsum.photos/150?2",
    href: "ex1.htm2",
    },
    {
    nome: "Mochila",
    preco: 129.9,
    imagem:
    "https://picsum.photos/150?3",
    href: "ex1.html",
    },
    {
        nome: "vinicios junior",
        preco: 10000000.00,
        imagem:
        "https://lncimg.lance.com.br/uploads/2025/04/Vini-Jr-comemora-gol-marcado-sobre-o-Arsenal-pelo-Real-Madrid-na-Champions-League-scaled-aspect-ratio-512-320.jpg",
        href: "./ola.html",
    },
    ];

   // Seleciona o elemento HTML com o id "galeria", onde os produtos serão inseridos
const galeria = document.getElementById("galeria");

// Percorre cada item do array "produtos" (já definido anteriormente no script.js)
produtos.forEach(produto => {
  
  // Cria um novo elemento <div> para representar o "card" do produto
  const card = document.createElement("div");
  
  // Adiciona a classe CSS "card" à div recém-criada
  // Isso aplica os estilos definidos no seu arquivo style.css
  card.classList.add("card");

  // Define o conteúdo HTML interno do card com os dados do produto
  // Usa template string (``) para injetar os valores de forma dinâmica
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
    <a href="${produto.href}">
    <button>clique aqui para informações </button>
    </a>
  `;
  /*
    - <img>: Exibe a imagem do produto.
      - src: pega a URL da imagem.
      - alt: descrição da imagem (bom para acessibilidade).
    - <h3>: Mostra o nome do produto.
    - <p>: Mostra o preço formatado com 2 casas decimais, trocando "." por ",".
  */

  // Adiciona esse card (com imagem, nome e preço) dentro da div "galeria"
  galeria.appendChild(card);
});
