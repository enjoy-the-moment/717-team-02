(function () {
    const products = [
        {
            id: '1',
            title: 'DOGGY Fun Set',
            imegeUrl: 'img/pet_inventory.png',
            description: 'DOGGY Fun Set',
            category: 'dogs',
            price: '6.00',
        },
        {
            id: '2',
            title: 'DUNA Pillow Bed',
            imegeUrl: 'img/pet_bed.png',
            description: 'DUNA Pillow Bed',
            category: 'dogs',
            price: '10.00',
        },
        {
            id: '3',
            title: 'AGA Retractable Leash',
            imegeUrl: 'img/adjustable_leash.png',
            description: 'AGA Retractable Leash',
            category: 'dogs',
            price: '33.00',
        },
        {
            id: '4',
            title: 'DOGGY 2-Bunch Toy',
            imegeUrl: 'img/dog_toy.png',
            description: 'DOGGY 2-Bunch Toy',
            category: 'dogs',
            price: '5.00',
        },
        {
            id: '5',
            title: 'AGA Mice Set',
            imegeUrl: 'img/toy_mouse.png',
            description: 'AGA Mice Set',
            category: 'cats',
            price: '3.00',
        },
        {
            id: '6',
            title: 'VITALIFE 2-Bowls Set',
            imegeUrl: 'img/feeder_for_cat.png',
            description: 'VITALIFE 2-Bowls Set',
            category: 'cats',
            price: '9.00',
        },
        {
            id: '7',
            title: 'AGA Leash & Collar',
            imegeUrl: 'img/leash_for_cat.png',
            description: 'AGA Leash & Collar',
            category: 'cats',
            price: '13.00',
        },
        {
            id: '8',
            title: 'DUNA Gray Bed',
            imegeUrl: 'img/cat_bed.png',
            description: 'DUNA Gray Bed',
            category: 'cats',
            price: '25.00',
        },
        {
            id: '9',
            title: 'DORA Hanging Mirror',
            imegeUrl: 'img/parrot_mirror.png',
            description: 'DORA Hanging Mirror',
            category: 'parrot',
            price: '14.00',
        },
        {
            id: '10',
            title: 'VETRA Hanging Nest',
            imegeUrl: 'img/home_for_parrot.png',
            description: 'VETRA Hanging Nest',
            category: 'parrot',
            price: '8.00',
        },
        {
            id: '11',
            title: 'DORA Wood Swing',
            imegeUrl: 'img/parrot_swing.png',
            description: 'DORA Wood Swing',
            category: 'parrot',
            price: '7.00',
        },
        {
            id: '12',
            title: 'OPTY Wooden Stand',
            imegeUrl: 'img/stand_for_parrots.png',
            description: 'OPTY Wooden Stand',
            category: 'parrot',
            price: '13.00',
        },
        {
            id: '13',
            title: 'SERA Purple Collar',
            imegeUrl: 'img/collar_for_rabbits.png',
            description: 'SERA Purple Collar',
            category: 'rabbit',
            price: '2.00',
        },
        {
            id: '14',
            title: 'AGA Clinking Toy',
            imegeUrl: 'img/rabbits_toy.png',
            description: 'AGA Clinking Toy',
            category: 'rabbit',
            price: '2.00',
        },
        {
            id: '15',
            title: 'HARNO Rabbit Cage',
            imegeUrl: 'img/rabbit_cage.png',
            description: 'HARNO Rabbit Cage',
            category: 'rabbit',
            price: '60.00',
        },
        {
            id: '16',
            title: 'DORA Rabbit Brush',
            imegeUrl: 'img/rabbit_brush.png',
            description: 'DORA Rabbit Brush',
            category: 'rabbit',
            price: '10.00',
        },
        {
            id: '17',
            title: 'AGA Bowl for hamster',
            imegeUrl: 'img/bowl_for_hamsters.png',
            description: 'AGA Bowl for hamster',
            category: 'hamster',
            price: '2.00',
        },
        {
            id: '18',
            title: 'TISCO Toy Wheel',
            imegeUrl: 'img/toy_wheel.png',
            description: 'TISCO Toy Wheel',
            category: 'hamster',
            price: '9.00',
        },
        {
            id: '19',
            title: 'STERCO Rainbow Balls',
            imegeUrl: 'img/balls_for_hamsters.png',
            description: 'STERCO Rainbow Balls',
            category: 'hamster',
            price: '3.50',
        },
        {
            id: '20',
            title: 'AGA Green Cage',
            imegeUrl: 'img/cage_for_hamsters.png',
            description: 'AGA Green Cage',
            category: 'hamster',
            price: '25.00',
        },
        {
            id: '21',
            title: 'DUCCA Air Pump',
            imegeUrl: 'img/air_pump.png',
            description: 'DUCCA Air Pump',
            category: 'fish',
            price: '42.00',
        },
        {
            id: '22',
            title: 'TISCO 50 Liter Aquarium',
            imegeUrl: 'img/aquarium.png',
            description: 'TISCO 50 Liter Aquarium',
            category: 'fish',
            price: '70.00',
        },
        {
            id: '23',
            title: 'VEGA Fish Castle',
            imegeUrl: 'img/fish_castle.png',
            description: 'VEGA Fish Castle',
            category: 'fish',
            price: '6.00',
        },
        {
            id: '24',
            title: 'TISCO Landing Net',
            imegeUrl: 'img/landing_net.png',
            description: 'TISCO Landing Net',
            category: 'fish',
            price: '4.00',
        }
    ];
    let currentCategory = 'dogs';
    function renderProducts(products) {
        const productsContainer = document.querySelector('.row');
        productsContainer.innerHTML = '';
        const filteredProducts = products.filter( product => product.category === currentCategory);
        for (const product of filteredProducts) {
            productsContainer.innerHTML += `
            <div class="recommendation-item">
                <a class="recommendation_card_link" href="#">
                    <img class="recommendation_card" 
                    src="${product.imegeUrl}" 
                    alt="${product.title}">
                    <div class="rec_name">
                        <p>
                            ${product.title}
                        </p>
                    </div>
                </a>
                <div class="rec_price">
                    <p>
                        $${product.price}
                    </p>
                </div>
                <button class="rec_button">
                    Add to Cart
                </button>
            </div>
            `
        }
    }
    renderProducts(products);
    document.querySelector('.rec_img_dogs'). addEventListener('click', () => {
        currentCategory = 'dogs';
        renderProducts(products);
    });
    document.querySelector('.rec_img_cats'). addEventListener('click', () => {
        currentCategory = 'cats';
        renderProducts(products);
    });
    document.querySelector('.rec_img_parrot'). addEventListener('click', () => {
        currentCategory = 'parrot';
        renderProducts(products);
    });
    document.querySelector('.rec_img_hamster'). addEventListener('click', () => {
        currentCategory = 'hamster';
        renderProducts(products);
    });
    document.querySelector('.rec_img_fish'). addEventListener('click', () => {
        currentCategory = 'fish';
        renderProducts(products);
    });
})()