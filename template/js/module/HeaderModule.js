export default function HeaderModule() {
    const header = document.querySelector('.header');
    const headTop = header ? header.querySelector(".header-top") : null;
    const headBottom = header ? header.querySelector(".header-bottom") : null;
    const hdTopHeight = headTop.scrollHeight;

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                headTop.style.height = 0;

                Object.assign(headBottom.style, {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.18)",
                })

            } else {
                headTop.style.height = hdTopHeight + "px";

                Object.assign(headBottom.style, {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    boxShadow: "unset",
                })
            }
        })
    }
}