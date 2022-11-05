(function () {
  const products = [
    {
      id: "1",
      title: "DORA Metal Pet Brush",
      imageUrl: "img/trending/metal_pet_brush.png",
      price: 15,
    },
    {
      id: "2",
      title: "Kitten's Heaven Set",
      imageUrl: "img/trending/heaven_set.png",
      price: 12,
    },
    {
      id: "3",
      title: "OPTY Pet Carrier",
      imageUrl: "img/trending/opty_pet_carrier.png",
      price: 8,
    },
    {
      id: "4",
      title: "AGA Rope Toy",
      imageUrl: "img/trending/rope_toy.png",
      price: 5,
    },
    {
      id: "5",
      title: "DORA Pet Carrier",
      imageUrl: "img/trending/dora_pet_carrier.png",
      price: 23,
    },
  ];

  const renderProducts = (products) => {
    const productsContainer = document.querySelector(
      ".trending__cards-wrapper"
    );
    productsContainer.innerHTML = "";
    for (const product of products) {
      productsContainer.innerHTML += `
      <article class="trending__card-item">
      <a class="trending__img-link" href="#">
          <img class="trending__img" src="${product.imageUrl}"
              alt="${product.title}">
      </a>
      <h4 class="trending__name">
          <a class="trending__link-name" href="#">${product.title}</a>
      </h4>
      <span class="trending__price">&#36;${product.price},00</span>
      <button class="trending__card-btn">Add to card</button>
      </article>
      `;
    }
  };
  renderProducts(products);
})();
