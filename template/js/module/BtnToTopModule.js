export default function BtnToTopModule(){
    const btnToTop =  document.querySelector(".backToTop");
    const header = document.querySelector('.header')
    const mobile = document.querySelector('.mobile')
    const mobileOverlay = document.querySelector('.mobile-overlay')
    const cartMini = document.querySelector('.cart-mini')

    if(btnToTop){
        btnToTop.addEventListener("click", function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
        window.addEventListener("scroll", function(){
            if(window.scrollY > 0){
                btnToTop.classList.add("active")
                cartMini.classList.add('sticky')
                header.classList.add('sticky')
                mobile.classList.add('sticky')
                mobileOverlay.classList.add('sticky')

            }else{
                btnToTop.classList.remove("active")
                cartMini.classList.remove('sticky')
                header.classList.remove('sticky')
                mobile.classList.remove('sticky')
                mobileOverlay.classList.remove('sticky')
            }
        })

        const sideBar = document.querySelector('.sidebar')
        if(sideBar){
            window.addEventListener("scroll", function(){
                if(window.scrollY > 0){
                    sideBar.classList.add('sticky')
    
                }else{
                    sideBar.classList.remove('sticky')
                }
            })
        }
    }
}