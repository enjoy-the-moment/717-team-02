(function () {
    const slides = [
      '<article class="arrivals__carousel-card"><a class="arrivals__carousel-card-link" href="#"><img src="../img/our_new_arrivals/bird_food.png" alt="food for birds"></a><h4 class="arrivals__carousel-card-product"><a class="arrivals__carousel-card-product-link" href="#"> VITALIFE Crunch Sticks Treat</a></h4><P class="arrivals__carousel-card-product-price">$5,00</P><button class="arrivals__carousel-card-product-button">Add to Cart</button></article>',
      '<article class="arrivals__carousel-card"><a class="arrivals__carousel-card-link" href="#"><img src="https://e-c.storage.googleapis.com/res/3818ef72-c8ed-4c59-8902-2a283c46bc65/480"alt="woven toy bird"></a><h4 class="arrivals__carousel-card-product"><a class="arrivals__carousel-card-product-link" href="#">DUNA WovenToy</a></h4><P class="arrivals__carousel-card-product-price">$1,50</P><button class="arrivals__carousel-card-product-button">Add to Cart</button></article>',
      '<article class="arrivals__carousel-card"><a class="arrivals__carousel-card-link" href="#"><img src="https://e-c.storage.googleapis.com/res/3a3ef7cf-ce57-4ae4-b99c-dea50f3fabce/480"alt="woven leash"></a><h4 class="arrivals__carousel-card-product"><a class="arrivals__carousel-card-product-link" href="#">SERA Woven Leash</a></h4><P class="arrivals__carousel-card-product-price">$2,00</P><button class="arrivals__carousel-card-product-button">Add to Cart</button></article>',
      '<article class="arrivals__carousel-card"><a class="arrivals__carousel-card-link" href="#"><img src="https://e-c.storage.googleapis.com/res/35461062-6ffc-4937-b2dc-87db4eea5ccd/480"alt="plastic bowl"></a><h4 class="arrivals__carousel-card-product"><a class="arrivals__carousel-card-product-link" href="#">OPTY Plastic Bowl</a></h4><P class="arrivals__carousel-card-product-price">$3,00</P><button class="arrivals__carousel-card-product-button">Add to Cart</button></article>',
      '<article class="arrivals__carousel-card"><a class="arrivals__carousel-card-link" href="#"><img src="https://e-c.storage.googleapis.com/res/4c83a50a-b592-412e-87e8-2eccb0ede3d9/480"alt="toy with butterfly for animals"></a><h4 class="arrivals__carousel-card-product"><a class="arrivals__carousel-card-product-link" href="#">EGO Butterfly Toy</a></h4><P class="arrivals__carousel-card-product-price">$8,00</P><button class="arrivals__carousel-card-product-button">Add to Cart</button></article>',
    ];
    let currentSlideIdx = 0;
    function renderSlide() {
      const slideContainer = document.querySelector('.arrivals__carousel');
      slideContainer.innerHTML = slides[currentSlideIdx];
      if (window.innerWidth > 767) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 990) {
          const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
          const fourthIndx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[thirdSlideIdx];
          slideContainer.innerHTML += slides[fourthIndx];
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
    setInterval(nextSlide, 4000);
    renderSlide();
    const nextBtn = document.querySelector('.arrivals__carousel-btn-left');
    nextBtn.addEventListener('click', nextSlide);
    const prevBtn = document.querySelector('.arrivals__carousel-btn-right');
    prevBtn.addEventListener('click', prevSlide);
  
    window.addEventListener('resize', renderSlide);
  })();