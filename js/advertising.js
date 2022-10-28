(function(){

    const advertising_products = [
        {
            id: "1",
            title: "For Rabbits",
            imageUrl: "img/rabbit_species.png",
            description: "Rabbit",
        },
        {
            id: "2",
            title: "For Fish",
            imageUrl: "img/fish_species.png",
            description: "Fish",
        },
        {
            id: "3",
            title: "For Hamsters",
            imageUrl: "img/hamster_species.png",
            description: "Hamster",
        },
        {
            id: "4",
            title: "For Cats",
            imageUrl: "img/cat_species.png",
            description: "Cat",
        },
        {
            id: "5",
            title: "For Dogs",
            imageUrl: "img/dog_species.png",
            description: "Hamster",
        },
        {
            id: "6",
            title: "For Parrots",
            imageUrl: "img/parrot_species.png",
            description: "Hamster",
        },
    ]

    function renderAdvertising(adv_products) {
        const advProductContainer = document.querySelector('.species__carousel');
        advProductContainer.innerHTML = '';
        for(const aproduct of adv_products) {
            advProductContainer.innerHTML += `
            <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="${aproduct.imageUrl}" alt="Rabbit" class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For ${aproduct.title}<span>→</span></h3>
            <p class="species__carousel-item-explanation">Food • Treats • Hay • Cages • Litter & Bedding •
                Harnesses
                • Toys • Odor Removers • </p>
        </article>
        <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="img/fish_species.png" alt="Fish" class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For Fish<span>→</span></h3>
            <p class="species__carousel-item-explanation">Food • Feeders • Aquariums • Filters & Pumps •
                Cleaning
                • Water Care • Decor • </p>
        </article>
        <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="img/hamster_species.png" alt="Hamster"
                    class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For Hamsters<span>→</span></h3>
            <p class="species__carousel-item-explanation">Food • Soft & Chewy Treats • Litter • Furniture •
                Collars
                and Leashes • Bowls • Toys • Beds • </p>
        </article>
        <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="img/cat_species.png" alt="Cat" class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For Cats<span>→</span></h3>
            <p class="species__carousel-item-explanation">Dry Food • Wet Food • Treats • Catnip & Grass • Litter
                Boxes • Bowls & Feeders • Toys • Beds • </p>
        </article>
        <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="img/dog_species.png" alt="Dog" class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For Dogs<span>→</span></h3>
            <p class="species__carousel-item-explanation">Dry & Canned Food • Jerky • Chewy Treats • Bowls •
                Toys
                • Collars and Leashes • Clothes • </p>
        </article>
        <article class="species_carousel-item">
            <div class="species__image-container">
                <img width="70" src="img/parrot_species.png" alt="Parrot" class="species__carousel-item-image">
            </div>
            <h3 class="species__carousel-item-title">For Parrots<span>→</span></h3>
            <p class="species__carousel-item-explanation">Food • Treats • Cages & Stands • Vitamins • Bowls &
                Feeders • Litter & Nesting • Odor Control • </p>
        </article>`
        }
    }
    // renderAdvertising();
})();