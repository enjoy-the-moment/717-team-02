(function() {

    const slides = [
        '<div class = "advertising__slide"><img src="img/advertising/rabbit_species.png" alt="For Rabbits"></div>',
        '<div class = "advertising__slide"><img src="img/advertising/fish_species.png" alt="For Fish"></div>',
        '<div class = "advertising__slide"><img src="img/advertising/hamster_species.png" alt="For Hamsters"></div>',
        '<div class = "advertising__slide"><img src="img/advertising/cat_species.png" alt="For Cats"></div>',
        '<div class = "advertising__slide"><img src="img/advertising/dog_species.png" alt="For Dogs"></div>',
        '<div class = "advertising__slide"><img src="img/advertising/parrot_species.png" alt="For Parrots"></div>',
    ];

    let currentSlideIdx = 0;

    function renderSlide() {
        const slideContainer = document.querySelector('.species__carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1>= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    setInterval(nextSlide, 1000);
    renderSlide();

})();