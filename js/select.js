const select = document.querySelector(".select-pizza"),
    options = document.querySelectorAll(".select__option"),
    result = document.querySelector(".form__calc");
let selectedOption = "",
    cost = result.innerHTML;

// Output value
const numberInput = document.querySelector(".number");

select.addEventListener("change", insertValue);

function insertValue() {
    selectedOption = select.value;
    
    if (numberInput.innerHTML != '0') {
        result.innerHTML = Number(selectedOption) * Number(numberInput.innerHTML);
    } else  {
        cost = selectedOption;
    }
}

// buttons events
const increaseBtn = document.querySelector(".increase-button");
const decreaseBtn = document.querySelector(".decrease-button");

increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);

function increaseValue() {
    const limit = 10;
    let value = parseInt(numberInput.innerHTML, 10);
  if(isNaN(value)) value = 0;
  if(limit && value >= limit) return;
    numberInput.innerHTML = value + 1;
    addCost();
}

function decreaseValue() {
  let value = parseInt(numberInput.innerHTML, 10);
  if(isNaN(value)) value = 0;  
  if(value < 1) return;
    numberInput.innerHTML = value - 1;
    minusCost();
}

function totalCost() {
    addCost();
    minusCost();
}

// Show total resut
function addCost() {  
    let output;
    if (increaseBtn && numberInput.innerHTML == 1 ) {
        result.innerHTML = selectedOption;
    } else if (increaseBtn && numberInput.innerHTML > 1) {
        output = Number(result.innerHTML) + Number(selectedOption);
        result.innerHTML = output.toFixed(2);
    }
}
function minusCost() {
    let output;
    if (decreaseBtn && numberInput.innerHTML == 0) {
        result.innerHTML = 0;
    }
    else if (decreaseBtn && numberInput.innerHTML >= 1) {
        output = Number(result.innerHTML) - Number(selectedOption);
        result.innerHTML = output.toFixed(2);
    }
}
