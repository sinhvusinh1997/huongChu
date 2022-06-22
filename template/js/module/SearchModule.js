export default function SearchModule() {
    const searchIcon = document.querySelector('.search-icon')
    const searchForm = document.querySelector('.search-form');

    let isSearchForm = false;
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            isSearchForm = !isSearchForm;
            if (isSearchForm) {
                searchForm.classList.add('open')
            } else {
                searchForm.classList.remove('open')
            }
        })
    }
    window.addEventListener('click', (e) => {
        const notSearchForm = searchForm.contains(e.target)
        const notSearchBtn = searchIcon.contains(e.target)

        isSearchForm = false
        if(!notSearchForm && !notSearchBtn){
            searchForm.classList.remove('open')
        }
    })



}