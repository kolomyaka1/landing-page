const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 59,
    lazy: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 38
        },
        1440: {
            spaceBetween: 59
        }

    
    }
  });