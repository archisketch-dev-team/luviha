new Swiper('.team', {
  loop: !0,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
  },
})
