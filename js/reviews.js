(function () {
  const slides = [
    '<div class="slide"><article class="carousel-reviews__body-person"> <a class="carousel-reviews__body-person-img"><img src="img/douglas.png" alt="Douglas Wright" ></a> <div class="carousel-reviews__body-person-name"><h3>Douglas Wright</h3></div><div class="carousel-reviews__body-person-pet"><p>and his gorgeous cat named Billy </p></div> <div class="carousel-reviews__body-person-p"><p><em>“I often order food for my cat from this store as they offer free shipping. The prices here are quite low, and you can order a lot of great goods by top manufacturers.”</em></p></div> <div class="carousel-reviews__body-person-date"><p>December 15, 2021</p></div>  </article>  </div>',
    '<div class="slide"><article class="carousel-reviews__body-person"> <a class="carousel-reviews__body-person-img"><img src="img/diana.png" alt="Diana Peterson" ></a> <div class="carousel-reviews__body-person-name"><h3>Diana Peterson</h3></div><div class="carousel-reviews__body-person-pet"><p>with Cooper, her lovely dog</p></div> <div class="carousel-reviews__body-person-p"><p><em>“My Cooper is already 10 years old and for the last 3 years, I have been ordering food, new leashes, and vitamins only at Happy Paw. They sell really high-quality goods!”</em></p></div> <div class="carousel-reviews__body-person-date"><p>February 02, 2022</p></div>  </article>  </div>',
    '<div class="slide"><article class="carousel-reviews__body-person"> <a class="carousel-reviews__body-person-img"><img src="img/john.png" alt="John and Mary Roberts" ></a> <div class="carousel-reviews__body-person-name"><h3>John and Mary Roberts</h3></div><div class="carousel-reviews__body-person-pet"><p>and their cool rabbit named Snowball</p></div> <div class="carousel-reviews__body-person-p"><p><em>“When we bought Snowball, Mary was very happy, but there were also many questions — we needed a cage, cleaning products,  hay, etc. But we easily found all this in Happy Paw! ”</em></p></div> <div class="carousel-reviews__body-person-date"><p>March 28, 2022</p></div>  </article>  </div>',
    '<div class="slide"><article class="carousel-reviews__body-person"> <a class="carousel-reviews__body-person-img"><img src="img/dean.png" alt="Dean Williamson" ></a> <div class="carousel-reviews__body-person-name"><h3>Dean Williamson</h3></div><div class="carousel-reviews__body-person-pet"><p>with Booper, the star of his Instagram </p></div> <div class="carousel-reviews__body-person-p"><p><em>“Booper gets all the best from me and the Happy Paw store! I often treat him with some new toys, decorations for his cage, etc. I absolutely trust Happy Paw.”</em></p></div> <div class="carousel-reviews__body-person-date"><p>May 05, 2022</p></div>  </article>  </div>',
  ];
  let currentSlideIdx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(
      ".products-carousel__slide-container"
    );
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 600) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 900) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }
  function nextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }

  renderSlide();
  const nextBtn = document.querySelector(".products-carousel__next");
  nextBtn.addEventListener("click", nextSlide);
  const prevBtn = document.querySelector(".products-carousel__prev");
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlide);
})();
