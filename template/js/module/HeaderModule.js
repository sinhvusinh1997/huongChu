export default function HeaderModule() {
    const header = document.querySelector('.header')

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add("sticky")
            } else {
                header.classList.remove("sticky")
            }
        })
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1100) {
            header.classList.remove('sticky-fix')
        }
    })
    $(document).ready(function () {
        if (window.innerWidth < 1100) {
            header.classList.remove('sticky-fix')
        }
    });


    const headerBtn = document.querySelector('.header-btn')
    if(headerBtn){
        const form = document.querySelector('.form')
        headerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            form.scrollIntoView(
                {
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                }
            );
        })
    }
}