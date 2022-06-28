
export default function MobileModule() {
   const triggerMobileBtns = document.querySelectorAll("[data-trigger-mobile]");
   const mobileElm = document.querySelector(".header-menu.menu");

   triggerMobileBtns.forEach(btn => {
      btn.addEventListener("click", e => {
         const valueBtn = e.target.closest(".burger")
            ? e.target.closest(".burger").dataset.triggerMobile
            : e.target.dataset.triggerMobile;

         mobileElm.style.width = (valueBtn === "show") ? "100vw" : 0;
         document.querySelector("body").style.overflowY = (valueBtn === "show") ? "hidden" : "scroll";
      });
   });


   if (window.innerWidth < 1200) {
      const mainMenu = document.querySelector("#main-menu");
      document.querySelector(".user .user-default").classList.add("btn");

      if (mainMenu) {
         const li1s = mainMenu.children;

         [...li1s].forEach(li1 => {
            const aTagLi1 = li1.querySelector("a");

            aTagLi1.addEventListener("click", e => {
               e.preventDefault();
               const subMenu1 = aTagLi1.nextElementSibling;

               if (subMenu1) {
                  if (subMenu1.style.height) {
                     subMenu1.style.height = null;
                  } else {
                     subMenu1.style.height = subMenu1.scrollHeight + "px";
                  }

                  const li2s = subMenu1.children;
                  [...li2s].forEach(li2 => {

                     const aTagLi2 = li2.querySelector("a");

                     aTagLi2.addEventListener("click", e => {
                        aTagLi2.closest(".menu-item").classList.toggle("active");
                        const subMenu2 = aTagLi2.nextElementSibling;

                        if (subMenu2) {
                           if (subMenu2.style.height) {
                              subMenu2.style.height = null;
                              subMenu1.style.height = (subMenu1.scrollHeight - subMenu2.scrollHeight) + "px";
                           } else {
                              subMenu2.style.height = subMenu2.scrollHeight + "px";
                              subMenu1.style.height = (subMenu1.scrollHeight + subMenu2.scrollHeight) + "px";
                           }
                        }
                     })
                  })

               }

            })
         })

      }
   }
}