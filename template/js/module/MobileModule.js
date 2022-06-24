export default function MobileModule() {
    const triggerMobileBtns = document.querySelectorAll("[data-trigger-mobile]");
    const mobileElm = document.querySelector(".header-menu.menu");

    triggerMobileBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            const valueBtn = e.target.closest(".burger")
                ? e.target.closest(".burger").dataset.triggerMobile
                : e.target.dataset.triggerMobile;

            mobileElm.style.width = (valueBtn === "show") ? "100vw" : 0;
            document.querySelector("body").style.overflowY = (valueBtn === "show") ? "hidden" : "scroll";
        });
    });

}