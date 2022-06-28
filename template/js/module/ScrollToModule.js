function handleArrowScoll() {
  const arrows = document.querySelectorAll(".arrow");
  arrows.forEach(arr => {
    arr.addEventListener("click", function() {
      const parentElem = this.parentNode;
  
      window.scrollBy(0,this.parentNode.getBoundingClientRect().top - 160)
    })
  })
}

function backToTop() {
  const btnToTop = document.querySelector(".backToTop");

  if (btnToTop) {
      btnToTop.addEventListener("click", function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      })
      window.addEventListener("scroll", function () {
          if (window.scrollY > 0) {
              btnToTop.classList.add("active");
          } else {
              btnToTop.classList.remove("active");
          }
      })
  }
}

export default function ScrollToModule() {

  handleArrowScoll();
  backToTop();
}
