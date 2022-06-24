import MobileModule from "./module/MobileModule.js"
import AosModule from "./module/AosModule.js"
import BtnToTopModule from "./module/BtnToTopModule.js"
import SwiperModule from "./module/SwiperModule.js"
import CountUpModule from "./module/CountUpModule.js"
import PopupModule from "./module/PopupModule.js"
import Select2Module from "./module/Select2Module.js"
import SearchModule from "./module/SearchModule.js"
import RangeModule from "./module/RangeModule.js"
import CheckModule from "./module/CheckModule.js"
import FAQSModule from "./module/FAQSModule.js"
import MayModule from "./module/MayModule.js"
import DetailModule from "./module/DetailModule.js"
import ProductModule from "./module/ProductModule.js"
import ReModule from "./module/ReModule.js"
import SelectCusModule from "./module/SelectCusModule.js"

import HeaderModule from "./module/HeaderModule.js"

window.addEventListener("DOMContentLoaded", () => {
  history.scrollRestoration = "manual";

  HeaderModule();
  MobileModule();
  SwiperModule();

  // AosModule();
  // BtnToTopModule();
  // CountUpModule();
  // PopupModule();
  // Select2Module();
  // SearchModule();
  // RangeModule();
  // CheckModule();
  // FAQSModule();
  // MayModule();
  // DetailModule();
  // ProductModule();
  // ReModule();
  // SelectCusModule();

  if (window.innerWidth < 1200) {
    const mainMenu = document.querySelector("#main-menu");
    if (mainMenu) {
      const li1s = mainMenu.children;

      [...li1s].forEach(li1 => {
        const aTagLi1 = li1.querySelector("a");

        aTagLi1.addEventListener("click", e => {
          e.preventDefault();
          // aTagLi1.closest(".menu-item").classList.toggle("active");
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

})