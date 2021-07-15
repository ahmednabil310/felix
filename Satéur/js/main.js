var slideRight = {
  distance: '200%',
  origin: 'right',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
};
var slideLeft = {
  distance: '200%',
  origin: 'left',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
};

ScrollReveal().reveal('.navbar', { delay: 100 });
ScrollReveal().reveal('.header-links', { delay: 200 });
ScrollReveal().reveal('.features-bar', { delay: 300 });
ScrollReveal().reveal('.main-section', { delay: 400 });
ScrollReveal().reveal('.description-content', slideRight);
ScrollReveal().reveal('.description-video', slideLeft);
ScrollReveal().reveal('.features-carousel-section', {
  delay: 200,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('.welcome-section', {
  delay: 300,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('#cardfirstrow', {
  distance: '250%',
  origin: 'left',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
});
ScrollReveal().reveal('#cardsecondrow', {
  distance: '200%',
  origin: 'right',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
});
ScrollReveal().reveal('#cardthirdrow', {
  distance: '200%',
  origin: 'left',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
});
ScrollReveal().reveal('.features-section', {
  delay: 200,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('#carousel-item-feature1', {
  distance: '300%',
  origin: 'right',
  opacity: null,
  delay: 300,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('#carousel-item-feature2', {
  distance: '300%',
  origin: 'right',
  opacity: null,
  delay: 400,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('#carousel-item-feature3', {
  distance: '300%',
  origin: 'right',
  opacity: null,
  delay: 500,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('#carousel-item-feature4', {
  distance: '300%',
  origin: 'right',
  opacity: null,
  delay: 600,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('#carousel-item-feature5', {
  distance: '300%',
  origin: 'right',
  opacity: null,
  delay: 700,
  easing: 'ease-in-out',
});
ScrollReveal().reveal('.collection-section_margin', {
  distance: '200%',
  origin: 'left',
  opacity: null,
  delay: 200,
  easing: 'ease-out',
});
ScrollReveal().reveal('#first-blog-card', {
  delay: 200,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('#second-blog-card', {
  delay: 350,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('#third-blog-card', {
  delay: 450,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('.concept-store_img', slideRight);
ScrollReveal().reveal('.concept-store_content', slideLeft);
ScrollReveal().reveal('.friends-section', {
  delay: 450,
  opacity: 0,
  easing: 'ease-in',
});
ScrollReveal().reveal('.cta-section', {
  delay: 350,
  opacity: 0,
  easing: 'ease-in',
});
const imgs = $('.swiper-wrapper .d-none img');

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < imgs.length; i += 1) {
        slides.push(`<img class="img-fluid" src=${imgs[i].src}>`);
      }
      return slides;
    })(),
  },
});

swiper.slideTo(1, 0);

for (var i = 0; i < imgs.length; i += 1) {
  $('.swiper-indicators').append(`<li class="slide-${i + 1}"></li>`);
}

$(`.swiper-indicators .slide-2`).addClass('active-special');

$(`.swiper-indicators li`).click(function () {
  const slideNum = parseInt(this.className.split('-')[1]);
  swiper.slideTo(slideNum - 1, 0);
  $(`.swiper-indicators li`).removeClass('active-special');
  $(`.swiper-indicators .slide-${slideNum}`).addClass('active-special');
});
