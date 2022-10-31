(function () {
    const iconBurger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__top-nav");
    const upperLine = document.querySelector(".header__upper-wrapper");
    iconBurger.addEventListener("click", function () {
      document.body.classList.toggle("lock");
      iconBurger.classList.toggle("active");
      nav.classList.toggle("active");
      upperLine.classList.toggle("active");
    });
  
    const navLinks = document.querySelectorAll(".header__nav-link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (_) => {
        if (iconBurger.classList.contains("active")) {
          document.body.classList.remove("lock");
          iconBurger.classList.remove("active");
          nav.classList.remove("active");
        }
      });
    });
  })();
  