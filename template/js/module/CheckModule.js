export default function CheckModule(){
    const checkOnlys = document.querySelectorAll('.check-only')
    const checkInputOnlys = document.querySelectorAll('.check-only .check-input')
    if(checkOnlys){
        checkOnlys.forEach(item => {
            item.addEventListener('click', () => {
                checkInputOnlys.forEach(item => {
                    item.checked = false;
                })
                const checkInput = item.querySelector('.check-input')
                checkInput.checked = true;
            })
        })
    }

    const checkManys = document.querySelectorAll('.check-many')
    if(checkManys){
        checkManys.forEach(item => {
            item.addEventListener('click', () => {
                const checkInput = item.querySelector('.check-input')
                if(checkInput.checked == false){
                    checkInput.checked = true;
                }else{
                    checkInput.checked = false;
                }
            })
        })
    }


    const checkLists  = document.querySelectorAll('.check-list')
    if(checkLists){
        checkLists.forEach(item => {
            const checkFirstItem = item.querySelector('.check-item .check-input').checked = true;
        })
    }


    // sidebar
    const sidebar = document.querySelector('.sidebar');
    const siderOpen = document.querySelector('.sidebar-open')
    const siderClose = document.querySelector('.sidebar-close')
    if(siderOpen){
        siderOpen.addEventListener('click', () => {
            sidebar.classList.add("open");
            siderOpen.classList.add("open");
        })
    }
    if(siderClose){
        siderClose.addEventListener('click', () => {
            sidebar.classList.remove("open");
            siderOpen.classList.remove("open");
        })
    }
}