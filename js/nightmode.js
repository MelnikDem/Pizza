
const modeBtn = document.querySelector(".button-mode");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
  modeBtn.classList.toggle("night");

  accordionItem.forEach(Element => Element.classList.toggle("night-accordion")
  && Element.nextElementSibling.classList.toggle("night-accordion"));
  document.querySelector(".order__account").classList.toggle("active");
  document.querySelector(".order__address").classList.toggle("active");
  document.querySelector(".order__payment").classList.toggle("active");
  document.querySelector(".form__block").classList.toggle("night-form");
  document.querySelector(".form__header").classList.toggle("night-orange");

  
  document.querySelector(".location__input").classList.toggle("night-border");
  document.querySelector('.main-content__text').classList.toggle("night-orange");
  document.querySelectorAll("a").forEach(Element => Element.classList.toggle("night-orange"));
  document.querySelectorAll(".heading-color").forEach(Element => Element.classList.toggle("night-orange"));
  document.querySelectorAll(".btn").forEach(Element => Element.classList.toggle("night-background"));
  document.querySelectorAll(".footer-section__link").forEach(Element => Element.classList.toggle("night-background"));

  
  const form = document.querySelector(".contacts__form");
  form.classList.toggle("night-form");
  if (form.classList.contains("night-form")) {
    document.querySelector(".contacts__btn").style.color = "#fff";
    document.querySelector(".contacts__btn").style.backgroundColor = "#FF8C42";
    document.querySelector(".contacts__heading").classList.toggle("night-orange")
  } else {
    document.querySelector(".contacts__btn").style.color = "#151515";
    document.querySelector(".contacts__btn").style.backgroundColor = "#FF5B00";
    document.querySelector(".contacts__heading").classList.toggle("night-orange")
  };

  const logoIcon = document.querySelector("#logo-icon");
  const svgIcon = document.querySelector("#svg-icon");
  if (modeBtn.classList.contains("night")) {
    svgIcon.setAttribute("href", './img/symbol-defs.svg#icon-Cloud_Sun');
    logoIcon.setAttribute("href", './img/symbol-defs.svg#icon-logo_night');
  } else {
    svgIcon.setAttribute("href", './img/symbol-defs.svg#icon-darkmode');
    logoIcon.setAttribute("href", './img/symbol-defs.svg#icon-PizzaLogo');
  };

});
