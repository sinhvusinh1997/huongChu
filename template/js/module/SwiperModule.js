export default function SwiperModule() {
    var homeSlider = new Swiper(".home-banner-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.home-banner-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.home-banner-slider .swiper-next',
            prevEl: '.home-banner-slider .swiper-prev',
        },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 32,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var collectionSlider = new Swiper(".collection-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.collection-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 32,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var collectionSliderSecond = new Swiper(".collection-slider-second .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.collection-slider-second .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 32,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var collectionSliderFull = new Swiper(".collection-full-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.collection-full-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1.3,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 210,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var testiSlider = new Swiper(".home-testi-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.home-testi-slider .swiper-pagination',
            type: "progressbar",
            clickable: true,
        },
        navigation: {
            nextEl: '.home-testi-slider .swiper-next',
            prevEl: '.home-testi-slider .swiper-prev',
        },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: false,
        // spaceBetween: 32,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
        on: {
            slideChange: function (e) {
                const currentSlide = document.querySelector('.home-testi-pagi-number span')
                currentSlide.innerHTML = '0' + (e.activeIndex + 1)
            },
            init: function (e) {
                const currentSlide = document.querySelector('.home-testi-pagi-number span')
                const totalSlide = document.querySelector('.home-testi-pagi-number p')
                currentSlide.innerHTML = '0' + (e.activeIndex + 1)
                totalSlide.innerHTML = '0' + e.slides.length
            }
        },
    });
    var imageSliderSub = new Swiper(".detail-image-slider-sub .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000,
        // },
        pagination: {
            el: '.collection-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 3,
        direction: "vertical",
        // slidesPerGroup: 2,
        // loop: true,
        // spaceBetween: 32,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var imageSliderMain = new Swiper(".detail-image-slider-main .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 600,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.collection-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        spaceBetween: 32,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: imageSliderSub,
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });

    var projectDSliderSub = new Swiper(".projectD-slider-sub .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000,
        // },
        pagination: {
            el: '.collection-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 32,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
    var projectDSliderMain = new Swiper(".projectD-slider-main .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.projectD-slider-wrap .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.home-banner-slider .swiper-next',
        //     prevEl: '.home-banner-slider .swiper-prev',
        // },
        slidesPerView: 1,
        // slidesPerGroup: 2,
        loop: true,
        // spaceBetween: 32,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: projectDSliderSub,
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2,
        //     },
        //     500: {
        //         slidesPerView: 2.2,

        //     },
        //     768: {
        //         slidesPerView: 3,

        //     },
        //     1200: {
        //         slidesPerView: 1,
        //     }
        // }
    });
}
