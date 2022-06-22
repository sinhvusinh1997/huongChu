export default function ProductModule(){
    const productIcons = document.querySelectorAll('.product-icon')
    const productLists = document.querySelectorAll('.product-list')
    let isActive = false;

    if(productIcons){
        productIcons.forEach(item => {
            item.addEventListener('click', () => {
                const productList = item.parentElement.parentElement.querySelector('.product-list')
                $(item).toggleClass('active');
                $(productList).toggleClass('open');
            })
        })
     
    }

    const sortMain = document.querySelector('.pro-sort-main')
    const sortList = document.querySelector('.pro-sort-list')
    let isSort = false;
    if(sortMain){
        sortMain.addEventListener('click', () => {
            isSort = !isSort
            if(isSort){
                sortList.classList.add('open')
                sortMain.classList.add('active')
            }else{
                sortList.classList.remove('open')
                sortMain.classList.remove('active')
            }
        })
        window.addEventListener('click', (e) =>{
            const notSortMain = sortMain.contains(e.target)
            isSort = false
            if(!notSortMain){
                sortList.classList.remove('open')
            }
        })
    }

}