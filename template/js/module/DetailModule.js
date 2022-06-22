export default function DetailModule(){
    const imgMain = document.querySelector('.detail-image-main img')
    const imgItems =  document.querySelectorAll('.detail-image-item')

    if(imgMain){
        imgMain.src = imgItems[0].querySelector('img').src
        imgItems.forEach(item => {
            item.addEventListener('click', () => {
               const srcLink = item.querySelector('img').src
               imgMain.src = srcLink;
               imgItems.forEach(item => {
                   item.classList.remove('active')
               })
               item.classList.add('active')
            })
        })
    }


    const dinfoItems = document.querySelectorAll('.dinfo-item')
    if(dinfoItems){
        dinfoItems.forEach(item => {
            item.addEventListener('click', () => {
               const dinfoContent = item.querySelector('.dinfo-content')
               $(dinfoContent).slideToggle();
               $(item).toggleClass('active');
            })
        })
    }
}