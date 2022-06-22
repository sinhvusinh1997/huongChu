export default function PopupModule() {
    $(document).ready(function () {
        $('.home-sus-video-play').magnificPopup({
            disableOn: 500,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });


    const openTensions = document.querySelectorAll('.open-tension')
    const openFabs = document.querySelectorAll('.open-fab')
    const openLegs = document.querySelectorAll('.open-legs')

    const popupTension = document.querySelector('.popup-tension')
    const popupFab = document.querySelector('.popup-fab')
    const popupLegs = document.querySelector('.popup-legs')
    const popups = document.querySelectorAll('.popup')
    const popupOverLays = document.querySelectorAll('.popup-overlay')

    const popupCloses = document.querySelectorAll('.popup-close')
    const body = document.getElementsByTagName("body")[0];

    if (openTensions) {
        openTensions.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupTension.classList.add('open')
                body.style.overflowY = "hidden"
            })
        })
    }
    if (openFabs) {
        openFabs.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupFab.classList.add('open')
                body.style.overflowY = "hidden"
            })
        })
    }
    if (openLegs) {
        openLegs.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupLegs.classList.add('open')
                body.style.overflowY = "hidden"
            })
        })
    }
    if (popupCloses) {
        popupCloses.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popups.forEach(item => {
                    item.classList.remove('open')
                    body.style.overflowY = "scroll"
                })
            })
        })
        if (popupOverLays) {
            popupOverLays.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    popups.forEach(item => {
                        item.classList.remove('open')
                body.style.overflowY = "scroll"
                    })
                })
            })
        }
    }

}