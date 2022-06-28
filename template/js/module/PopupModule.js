function closePopup() {
    const getElm = document.querySelectorAll("[data-hidden-modals]");

    getElm.forEach(elm => {
        elm.addEventListener("click", e => {
            const parent = e.target.closest(".modal");

            parent.classList.remove("active");
            parent.classList.remove("incorrect");
            parent.classList.remove("correct");
        })
    });
}

export function popupValidate(rs) {
    const modalElem = document.querySelector(".modal.notify");
    if (modalElem) {
        const iTag = modalElem.querySelector("i");
        const noti = modalElem.querySelector(".notify-detail");

        modalElem.classList.add("active");
        modalElem.classList.add(rs ? "correct" : "incorrect");
        iTag.classList.add(rs ? "fa-check" : "fa-exclamation");
        noti.innerHTML = rs ? "Validate!" : "Some thing's wrong!";
    }
}

export default function PopupModule() {
    closePopup();

}