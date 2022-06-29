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

function swiperCourseMyCoursePage() {
    const myCourse = document.querySelector(".main.my-course-page .my-course");

    if (myCourse) {
        const ctrlButton = myCourse.querySelector(".ctrl-button");
        const myCourseInner = myCourse.querySelector(".my-course-inner");
        const myCourseList = myCourse.querySelector(".my-course-list");
        const myCourseItem = myCourse.querySelectorAll(".my-course-item");

        let triggerSwiper = false;
        let gridOption = {};
        let breakpointsOption = {};

        if (window.innerWidth < 500) {
            Object.assign(ctrlButton.style, {
                visibility: "visible",
                opacity: "1",
            });
            Object.assign(myCourseList.style, {
                flexWrap: "nowrap",
                margin: "0"
            });

            myCourseInner.classList.add("swiper");
            myCourseList.classList.add("swiper-wrapper");
            myCourseItem.forEach(item => item.classList.add("swiper-slide"));

            triggerSwiper = true;

        } else {
            const courseListLen = myCourseList.querySelectorAll(".my-course-item").length;
            let maxItem = 6;
            let maxHeight = "80rem";

            if (window.innerWidth < 1200) {
                maxHeight = "70rem";
            }

            if (window.innerWidth < 767 && window.innerWidth > 500) {
                maxItem = 4;
            }

            if (window.innerWidth < 580) {
                maxHeight = "60rem";
            }

            if (courseListLen > maxItem) {
                Object.assign(ctrlButton.style, {
                    visibility: "visible",
                    opacity: "1",
                });

                Object.assign(myCourseList.style, {
                    height: maxHeight,
                    maring: 0,
                });

                myCourseInner.classList.add("swiper");
                myCourseList.classList.add("swiper-wrapper");
                myCourseItem.forEach(item => {
                    item.classList.add("swiper-slide");
                    item.style.height = "fit-content";
                });

            } else {
                myCourseItem.forEach(item => item.style.margin = "1.5rem");
                return;
            }

            gridOption = {
                rows: 2,
            };
            breakpointsOption = {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            };
            triggerSwiper = true;
        }

        if (triggerSwiper) {
            const swiperCouse = new Swiper(".main.my-course-page .my-course .swiper", {
                slidesPerView: 1,
                grid: gridOption,
                spaceBetween: 30,
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
                breakpoints: breakpointsOption,
            })
        }
    }
}


function swiperBlogListBlogPage() {
    const blog = document.querySelector(".main.blog-page .blog");

    if (blog) {

        const blogSwiper = new Swiper(".main.blog-page .blog .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
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
                500: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    }
                },
                820: {
                    slidesPerView: 3,
                    grid: {
                        rows: 3,
                    },
                }
            }
        });
    }


}

export default function SwiperModule() {
    swiperBanner();
    swiperStudentHomePage();
    swiperCouseCousePage();
    swiperCourseMyCoursePage();
    swiperBlogListBlogPage();

    if (window.innerWidth <= 767) {
        swiperCourseHomePage();
    }

    window.addEventListener("resize", e => {
        console.log("window resize")
        if (window.innerWidth <= 767) {
            swiperCourseHomePage();
        }

        swiperCourseMyCoursePage();


    })
}
