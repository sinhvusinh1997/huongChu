export default function FAQSModule(){
    const questions = document.querySelectorAll('.faqs-head')
    
    questions.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.parentElement.querySelector('.faqs-content')
            const iconArrow = item.querySelector('.faqs-icon')
            $(answer).slideToggle();
            $(iconArrow).toggleClass('active');
        })
    })
}