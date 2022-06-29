function swiperCourseHomePage() {
    const courseElem = document.querySelector(".main.home-page .course");
    if (courseElem) {
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
}

function swiperStudentHomePage() {
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
                580: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                980: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        })
    }
}

function swiperBanner() {
    const bannerElem = document.querySelector(".main .banner");
    if (bannerElem) {
        const bannerSwiper = new Swiper(bannerElem, {
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }
        });
    }
}

function swiperCouseCousePage() {
    const courseElem = document.querySelector(".main.couse-page .course");

    console.log(courseElem)

    if (courseElem) {
        const swiperCouse = new Swiper(".main.couse-page .course .swiper", {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
            spaceBetween: 0,
            freeMode: true,
            pagination: {
                el: ".ctrl-button .swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            navigation: {
                nextEl: ".ctrl-button .swiper-button-next",
                prevEl: ".ctrl-button .swiper-button-prev",
            },
            breakpoints: {
                580: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        })
    }
}
export default function SwiperModule() {
    swiperBanner();
    swiperStudentHomePage();
    swiperCouseCousePage();

    if (window.innerWidth <= 767) {
        swiperCourseHomePage();
    }

    window.addEventListener("resize", e => {
        if (window.innerWidth <= 767) {
            swiperCourseHomePage();
        }
    })
}
