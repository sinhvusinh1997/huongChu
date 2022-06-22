export default function ReModule(){
    const reEyeCloses = document.querySelectorAll('.re-eye-close')
    const reEyeOpens = document.querySelectorAll('.re-eye-open')
    

    if(reEyeCloses){
        reEyeCloses.forEach(item => {
            item.classList.add('open')
            item.addEventListener('click', () => {
                item.classList.remove('open')
                const reEyeOpen = item.parentElement.querySelector('.re-eye-open')
                reEyeOpen.classList.add('open')
                const input = item.parentElement.querySelector('.re-input')
                if(input.type === 'password'){
                    input.type = "text";
                }else{
                    input.type = "password";
                }
            })
        })
    }
    if(reEyeOpens){
        reEyeOpens.forEach(item => {
            item.addEventListener('click', () => {
                reEyeCloses.forEach(item => {
                    item.classList.remove('open')
                })
                item.classList.remove('open')
                const reEyeClose = item.parentElement.querySelector('.re-eye-close')
                reEyeClose.classList.add('open')
                const input = item.parentElement.querySelector('.re-input')
                if(input.type === 'password'){
                    input.type = "text";
                }else{
                    input.type = "password";
                }
            })
        })
    }

    const reCloses = document.querySelectorAll('.re-close')
    if(reCloses){
        reCloses.forEach(item => {
            item.addEventListener('click', () => {
               const input = item.parentElement.querySelector('.re-input')
               input.value = ' '
               input.focus();
               
            })
        })
    }
    
}