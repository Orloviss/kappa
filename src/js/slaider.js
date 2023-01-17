// slider about-us

new Swiper('.about-us__slaider', {
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        375: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2.3,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 2.4,
        }
    }
});


// slider reviews


new Swiper('.reviews__slaider', {
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        375: {
            slidesPerView: 1.36,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2.7,
            spaceBetween: 25,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 4.3,
            spaceBetween: 25,
        }
    }
});

// slider licence-block

new Swiper('.licence__slaider', {
    navigation: {
        nextEl: '.licence-next',
        prevEl: '.licence-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        375: {
            slidesPerView: 1.65,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 4.1,
            // spaceBetween: 30,
        }
    }
});

// slider licence-block

new Swiper('.photography-slaider', {
    observer: true,
  observeParents: true,

    navigation: {
        nextEl: '.photography-arrow-next',
        prevEl: '.photography-arrow-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        375: {
            slidesPerView: 1.15,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        }
    }
});

// slider reviews


new Swiper('.services__card-wrapper__slaider', {
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
    
        750: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.7,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3.8,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
});
