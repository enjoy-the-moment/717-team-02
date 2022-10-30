(function () {

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

        if (window.innerWidth > 780) {
            const AddTwoSlideIndex = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[AddTwoSlideIndex];
            if (window.innerWidth > 900) {
            const AddThirdSlideIndex = AddTwoSlideIndex + 1 >= slides.length ? 0 : AddTwoSlideIndex + 1;
            slideContainer.innerHTML += slides[AddThirdSlideIndex];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlide();
    }

    // setInterval(nextSlide, 1000);
    renderSlide();

    const nextButton = document.querySelector('.species__carousel-next');
    nextButton.addEventListener('click', nextSlide)

    const prevButton = document.querySelector('.species__carousel-prev');
    prevButton.addEventListener('click', prevSlide)

    window.addEventListener('resize', renderSlide);
})();