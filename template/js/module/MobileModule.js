export default function MobileModule() {
    const burgerBtn = document.getElementById('hamburger')
    const arrowIcon = document.querySelectorAll(".mobile-arrow")
    const mobile =  document.querySelector('.mobile')
    const mobileOverLay =  document.querySelector('.mobile-overlay')
    const body = document.getElementsByTagName("body")[0];

    let isOpen = false;
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            isOpen = !isOpen
            if (isOpen) {
                burgerBtn.classList.add('active')
                mobile.classList.add('open')
                mobileOverLay.classList.add('open')
                body.style.overflowY = "hidden"
            }
            else {
                burgerBtn.classList.remove('active')
                mobile.classList.remove('open')
                mobileOverLay.classList.remove('open')
                body.style.overflowY = "scroll"
            }
        })
    }
    if(mobileOverLay){
        mobileOverLay.addEventListener('click', function(){
            isOpen = false;
            burgerBtn.classList.remove('active')
            mobile.classList.remove('open')
            mobileOverLay.classList.remove('open')
            body.style.overflowY = "scroll"
        })
    }
    

    for (let i = 0; i < arrowIcon.length; i++) {
        const item = arrowIcon[i];
        item.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(item.parentElement.parentElement)
            const mobileSub = item.parentElement.parentElement.querySelector(".mobile-sub");
            const mobileLink = item.parentElement
            $(mobileSub).slideToggle();
            $(mobileLink).toggleClass("active")
        })

    }
}