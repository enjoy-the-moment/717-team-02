(function() {

    const products = [
        {
            id: "1",
            title: "For Rabbits",
            imageUrl: "img/advertising/rabbit_species.png",
            description: "Food • Treats • Hay • Cages • Litter & Bedding • Harnesses • Toys • Odor Removers ",

        },
        {
            id: "2",
            title: "For Fish",
            imageUrl: "img/advertising/fish_species.png",
            description: "Food • Feeders • Aquariums • Filters & Pumps • Cleaning • Water Care • Decor ",

        },
        {
            id: "3",
            title: "For Hamsters",
            imageUrl: "img/advertising/hamster_species.png",
            description: "Food • Soft & Chewy Treats • Litter • Furniture • Collars and Leashes • Bowls • Toys • Beds ",

        },
        {
            id: "4",
            title: "For Cats",
            imageUrl: "img/advertising/cat_species.png",
            description: "Dry Food • Wet Food • Treats • Catnip & Grass • Litter Boxes • Bowls & Feeders • Toys • Beds ",

        },
        {
            id: "5",
            title: "For Dogs",
            imageUrl: "img/advertising/dog_species.png",
            description: "Dry & Canned Food • Jerky • Chewy Treats • Bowls • Toys • Collars and Leashes • Clothes ",

        },
        {
            id: "6",
            title: "For Parrots",
            imageUrl: "img/advertising/parrot_species.png",
            description: "Food • Treats • Cages & Stands • Vitamins • Bowls & Feeders • Litter & Nesting • Odor Control ",

        },
    ]

    function renderProducts(products) {
        const productsContainer = document.querySelector('.species__carousel');
        productsContainer.innerHTML = '';
    }

    for (const product of products) {
        productsContainer.innerHTML += `
        <article class="species_carousel-item">
        <div class="species__image-container">
            <img width="70" src="${product.imageUrl}" alt="Rabbit" class="species__carousel-item-image">
        </div>
        <h3 class="species__carousel-item-title">${product.title}<span>→</span></h3>
        <p class="species__carousel-item-explanation">${product.description}</p>
    </article>`;
    }
    

})();