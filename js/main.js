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
