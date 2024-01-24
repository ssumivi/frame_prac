window.onload = function () {
  //promotion swiper
  var swiper = new Swiper(".swiper_prom", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion .sw_next",
      prevEl: ".promotion .sw_prev",
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
    },
  });
  //swiper shopping
  var swiper = new Swiper(".swiper_sp", {
    slidesPerView: 4,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    navigation: {
      nextEl: ".section_slide .sw_next",
      prevEl: ".section_slide .sw_prev",
    },
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //tour swiper
  new Swiper(".sw-tour", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row",
    },
    navigation: {
      nextEl: ".section_slide .sw_next",
      prevEl: ".section_slide .sw_prev",
    },
    spaceBetween: 10,
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        // 화면당 2개씩 슬라이드 이동
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //ticket swiper
  var swiper = new Swiper(".sw-ticket", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  //live swiper
  var swiper = new Swiper(".sw-live", {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  //books swiper
  var swiper = new Swiper(".sw-books", {
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 27,
      },
    },
  });
  //event swiper
  new Swiper(".sw-events", {
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
    },
  });
};
