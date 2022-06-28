import MobileModule from "./module/MobileModule.js";
import SwiperModule from "./module/SwiperModule.js";
import HeaderModule from "./module/HeaderModule.js";
import ScrollToModule from "./module/ScrollToModule.js";
import ValidationModule from "./module/ValidationModule.js";

import AosModule from "./module/AosModule.js"
import BtnToTopModule from "./module/BtnToTopModule.js"
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


// window.addEventListener("DOMContentLoaded", () => {
//   history.scrollRestoration = "manual";

//   HeaderModule();
//   MobileModule();
//   SwiperModule();
//   ScrollToModule();
//   // AosModule();
//   // BtnToTopModule();
//   // CountUpModule();
//   // Select2Module();
//   // SearchModule();
//   // RangeModule();
//   // CheckModule();
//   // FAQSModule();
//   // MayModule();
//   // DetailModule();
//   // ProductModule();
//   // ReModule();
//   // SelectCusModule();
// });

const afterDOMLoaded = () => {
  history.scrollRestoration = "manual";

  HeaderModule();
  MobileModule();
  SwiperModule();
  ScrollToModule();
  // ValidationModule("#request-form");
  ValidationModule("#footer-form");
  PopupModule();


}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterDOMLoaded)
} else {
  afterDOMLoaded();
}