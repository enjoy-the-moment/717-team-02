(async function () {

    const response = await fetch('api/advertising/products.json');
    const products = await response.json();

    function renderProducts(products) {
        
        const productsContainer = document.querySelector('.species__list');
        productsContainer.innerHTML = '';

        for (const product of products) {
            productsContainer.innerHTML += `
        <article class="species_carousel-item">
        <div class="species__image-container">
            <img src="${product.imageUrl}" alt="Rabbit" class="species__list-item-image">
        </div>
        <h3 class="species__list-item-title">${product.title}<span>→</span></h3>
        <p class="species__list-item-explanation">${product.description}</p>
    </article>`;
        }
    }
    renderProducts(products);

})();