const form = document.querySelector(".pizza-size"),
    resetBtn = document.querySelector("[type=reset]"),
    discontBtn = document.querySelector(".submit");

    const clientPizza = {
        size: null,
        ingridients: [],
        nameIngridients: [],
        price: 0,
    };

    //Pizza price
    const pricePizza = {
        largePizza: 7,
        midPizza: 5,
        smallPizza: 3,
        bacon: 4,
        mushroom: 3,
        mozzarella: 4,
        tomato: 2,
        pineapple: 3,
        pepper: 2,
        ketchup: 2,
        sauce: 2,
    };
    
window.addEventListener("load", () => {
    // Client pizza
    let inputRadio = document.querySelectorAll(".radiobtn");
    inputRadio.forEach((e) => {
        e.addEventListener("click", () => {
            clientPizza.size = e.value;
            console.dir("radiobtn: "+ clientPizza.size);
            myPizza();
        });
    });
    
    function costPizza() {
        clientPizza.price = 0;
        if (clientPizza.size) {
            if (clientPizza.size === "small") {
                clientPizza.price += pricePizza.smallPizza;
            }
            if (clientPizza.size === "medium") {
                clientPizza.price += pricePizza.midPizza;
            }
            if (clientPizza.size === "large") {
                clientPizza.price += pricePizza.largePizza;
            }
        }

        clientPizza.ingridients.forEach((element) => {
            if (element === "bacon") {
                clientPizza.price += pricePizza.bacon;
            }
            if (element === "mushroom") {
                clientPizza.price += pricePizza.mushroom;
            }
            if (element === "mozzarella") {
                clientPizza.price += pricePizza.mozzarella;
            }
            if (element === "tomato") {
                clientPizza.price += pricePizza.tomato;
            }
            if (element === "pineapple") {
                clientPizza.price += pricePizza.pineapple;
            }
            if (element === "pepper") {
                clientPizza.price += pricePizza.pepper;
            }
            if (element === "ketchup") {
                clientPizza.price += pricePizza.ketchup;
            }
            if (element === "sauсe") {
                clientPizza.price += pricePizza.sauсe;
            }
        });
    }
  
    function cost() {
        if (clientPizza.price !== 0) {
        console.dir("function cost: "+clientPizza.price)
        document.querySelector(".result__span").textContent = `${clientPizza.price} $`;
        } else document.querySelector(".result__span").textContent = "0";
    }

    function ingridients() {
        document.querySelector(".result__ingridient > p").textContent = `Ingridients: ${clientPizza.nameIngridients.join(", ")}`;
        console.dir("ingridients:" + clientPizza.nameIngridients.join(", "))
    }

    function priceDiscount() {
        clientPizza.price = clientPizza.price - clientPizza.price * 0.2;
        document.querySelector(".result__price").textContent = "New Price -20% discount: ";
        document.querySelector(".result__span").textContent = `${clientPizza.price} $`;
    }

    discontBtn.addEventListener("click", priceDiscount);

    function myPizza() {
    costPizza();
    cost();
    ingridients();
    }


//Drag & drop

const dragAndDrop = () => {
    const defaultPizza = document.querySelector(".pizza-constuctor__thumb");
    console.log(defaultPizza);

    function dragStart(e) {
        if (e.target.dataset.key === "ingridient") {
            if (!clientPizza.nameIngridients.includes(e.target.alt)) {
                clientPizza.nameIngridients.push(e.target.alt);
                clientPizza.ingridients.push(e.target.id);
            }
        }
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("img", this.attributes.src.textContent);
    }
    function dragEnd(e) {
      defaultPizza.classList.remove("hover");
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    function dragEnter(e) {
      defaultPizza.classList.add("hover");
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    function dragLeave(e) {
      defaultPizza.classList.remove("hover");
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    function dragOver(e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    function dropIngridient(e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();

      const imgIngridient = document.createElement("img");
      imgIngridient.setAttribute("src", e.dataTransfer.getData("img"));
        defaultPizza.append(imgIngridient);

      myPizza();
    }

    defaultPizza.addEventListener("dragover", dragOver);
    defaultPizza.addEventListener("drop", dropIngridient);
    defaultPizza.addEventListener("dragenter", dragEnter);
    defaultPizza.addEventListener("dragleave", dragLeave);

    const ingridients = document.querySelectorAll(".drag_drop");
    ingridients.forEach((ingridient) => {
      ingridient.addEventListener("dragstart", dragStart);
      ingridient.addEventListener("dragend", dragEnd);
    });
  };
  
  dragAndDrop();

  resetBtn.addEventListener("click", () => {
    clientPizza.size = null;
    clientPizza.indridients = [];
    clientPizza.nameIngridients = [];
    clientPizza.price = 0;

    const ingridients = document.querySelectorAll(".pizza-constuctor__thumb img");
    
      ingridients.forEach((ingridient) => {
          if (!ingridient.alt[0]) {
              ingridient.remove();
              console.dir(ingridient);
      }
    });
      myPizza();

      document.querySelector(".result__span").innerHTML = "0 $";
      
      for (let i = 0; i < inputRadio.length; i++){
           inputRadio[i].checked = false;
      }
       
  });

});