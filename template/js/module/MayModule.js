export default function MayModule() {
    const mayItems = document.querySelectorAll('.may-item')
    const mayChecks = document.querySelectorAll('.may-check-input')

    if (mayItems) {
        mayItems.forEach(item => {
            item.addEventListener('click', () => {
                const mayCheck = item.querySelector('.may-check-input')
                mayChecks.forEach(item => {
                    item.checked = false;
                })
                mayCheck.checked = true;
            })
        })
    }


    const sizeBtnPlus = document.querySelectorAll('.may-size-btn-plus')
    const sizeBtnMinus = document.querySelectorAll('.may-size-btn-minus')
    const sizeNumber = document.querySelectorAll('.may-size-number-main')
    // if (sizeNumber) {
    //     sizeNumber.innerHTML = `${sizeInput.value < 10 && sizeInput.value > 0 ? '0' : ' '}` + sizeInput.value
    //     sizeBtnMinus.addEventListener('click', () => {
    //         if (parseInt(sizeInput.value) > parseInt(sizeInput.min)) {
    //             sizeInput.value--
    //             sizeNumber.innerHTML = `${sizeInput.value < 10 && sizeInput.value > 0 ? '0' : ' '}` + sizeInput.value
    //         }
    //     })
    //     sizeBtnPlus.addEventListener('click', () => {
    //         if (parseInt(sizeInput.value) < parseInt(sizeInput.max)) {
    //             sizeInput.value++
    //             sizeNumber.innerHTML = `${sizeInput.value < 10 && sizeInput.value > 0 ? '0' : ' '}` + sizeInput.value
    //         }
    //     })
    // }
    if(sizeNumber){
        sizeNumber.forEach(item => {
            const input = item.parentElement.querySelector('.may-size-number-input')
            item.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
        })
    }
    sizeBtnMinus.forEach(item => {
        item.addEventListener('click',() => {
            const number = item.parentElement.querySelector('.may-size-number-main')
            const input = item.parentElement.querySelector('.may-size-number-input')
            if(parseInt(input.value) > parseInt(input.min)){
                input.value--
                number.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
            }
        })
    })
    sizeBtnPlus.forEach(item => {
        item.addEventListener('click',() => {
            const number = item.parentElement.querySelector('.may-size-number-main')
            const input = item.parentElement.querySelector('.may-size-number-input')
            if(parseInt(input.value) < parseInt(input.max)){
                input.value++
            number.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
            }
            
        })
    })
}   