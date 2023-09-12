document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
  });
});
