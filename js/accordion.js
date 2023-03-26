const accordionItem = document.querySelectorAll(".accordion-item");
    for (let i = 0; i < accordionItem.length; i++) {
      accordionItem[i].addEventListener("click", showOrderContent);
    }
    function showOrderContent() {
      this.nextElementSibling.classList.toggle("hide");
      this.firstElementChild.classList.toggle("rotate");
    }