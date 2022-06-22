export default function SelectCusModule() {
    const slHeads = document.querySelectorAll('.sl-head')
    const slLists = document.querySelectorAll('.sl-list')
    if (slHeads) {
        slHeads.forEach(item => {
            item.addEventListener('click', () => {
                const slList = item.parentElement.querySelector('.sl-list')
                $(slList).toggle();
            })
        })
    }
    const slItems = document.querySelectorAll('.sl-item')
    if(slItems){
        slItems.forEach(item => {
            item.addEventListener('click',() => {
                const slMain = item.parentElement.parentElement.querySelector('.sl-main')
                const input = item.parentElement.parentElement.querySelector('.select-input')
                const slList = item.parentElement
                input.value = item.innerText;
                slMain.innerHTML = input.value;
                $(slList).hide();

            })
        })
    }
    if(slLists){
        slLists.forEach(item => {
            const slMain = item.parentElement.querySelector('.sl-main')
            const slItem = item.querySelectorAll('.sl-item')[0]
            const input = item.parentElement.querySelector('.select-input')
            input.value = slItem.innerText
            slMain.innerHTML = input.value
        })
    }

    const slCuss = document.querySelectorAll('.sl-cus')
    window.addEventListener('click',(e) =>{
        slCuss.forEach(item =>{
            const notCuss = item.contains(e.target)
            if(!notCuss){
                const slList = item.querySelector('.sl-list')
                $(slList).hide();
            }
        })
    })

}