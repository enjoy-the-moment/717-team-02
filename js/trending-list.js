(function () {
  const slides = [
    `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="img/trending/metal_pet_brush.png"
            alt="DORA Metal Pet Brush">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">DORA Metal Pet Brush</a>
    </h4>
    <span class="trending__price">&#36;15,00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `,
    `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="img/trending/heaven_set.png"
            alt="Kitten's Heaven Set">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">Kitten's Heaven Set</a>
    </h4>
    <span class="trending__price">&#36;12,00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `,
    `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="img/trending/opty_pet_carrier.png"
            alt="OPTY Pet Carrier">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">OPTY Pet Carrier</a>
    </h4>
    <span class="trending__price">&#36;8,00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `,
    `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="img/trending/rope_toy.png"
            alt="AGA Rope Toy">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">AGA Rope Toy</a>
    </h4>
    <span class="trending__price">&#36;5,00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `,
    `
    <article class="trending__card-item">
    <a class="trending__img-link" href="#">
        <img class="trending__img" src="img/trending/dora_pet_carrier.png"
            alt="Dora Pet Carrier">
    </a>
    <h4 class="trending__name">
        <a class="trending__link-name" href="#">Dora Pet Carrier</a>
    </h4>
    <span class="trending__price">&#36;23,00</span>
    <button class="trending__card-btn">Add to card</button>
    </article>
    `,
  ];

  let currentSlideIdx = 0;

  function renderSlide() {
    const slideContainer = document.querySelector(".trending__cards-wrapper");
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 768) {
      const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 991) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
        if (window.innerWidth > 992) {
          const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[fourthSlideIdx];
        }
      }
    }
  }

  function nextSlide() {
    currentSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide()
  }

  function prevSlide() {
    currentSlideIdx =
        currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide()
  }
  renderSlide();

  const nextBtn = document.querySelector('.trending__arrow-right')
  nextBtn.addEventListener('click', nextSlide)
  const prevtBtn = document.querySelector('.trending__arrow-left')
  prevtBtn.addEventListener('click', prevSlide)

  window.addEventListener('resize', renderSlide)
})();
