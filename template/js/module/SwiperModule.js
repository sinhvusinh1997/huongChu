export default function SwiperModule() {
    const bannerElem = document.querySelector(".main .banner");
    if (bannerElem) {
        const bannerSwiper = new Swiper(bannerElem, {
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }
        });
    }

    const courseElem = document.querySelector(".main .course");
    if (courseElem) {
        window.addEventListener("resize", e => {
            if (window.innerWidth <= 767) {
                courseElem.querySelector(".course-inner").classList.add("swiper");
                courseElem.querySelector(".course-list").classList.remove("d-flex");
                courseElem.querySelector(".course-list").classList.add("swiper-wrapper");
                courseElem.querySelectorAll(".course-item").forEach(item => {
                    item.classList.remove("d-item");
                    item.classList.add("swiper-slide");
                });
    
                const courseSwiper = new Swiper(".main .course .swiper", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        520: {
                            slidesPerView: 2,
                        }
                    }
                })
            }
        })
    }

    const studentElem = document.querySelector(".main .student .swiper");
    if (studentElem) {
        const stuSwiper = new Swiper(studentElem, {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".ctrl-button .swiper-button-next",
                prevEl: ".ctrl-button .swiper-button-prev",
              },
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                980: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        })
    }


}
