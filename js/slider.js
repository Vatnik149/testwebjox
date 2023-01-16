const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1920:{
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    pagination:{
      el:".swiper-pagination",
      clickable:true,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    }
  })