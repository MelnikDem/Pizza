const inpName = document.querySelector(".contact__name");
const inpEmail = document.querySelector(".contact__email");
const inpPhone = document.querySelector(".contact__phone");

inpPhone.addEventListener("change", validatePhone);
inpName.addEventListener("change", validateName);
inpEmail.addEventListener("change", validateEmail);

function validateName() {
    const name = inpName.value;
    let pattern = /^[A-Za-z]+$/;

    if (name.match(pattern)) {
        inpName.nextElementSibling.classList.add('hide');
    } else if (name.match(pattern)) {
        inpName.nextElementSibling.classList.remove('hide');
    }  
};

function validateEmail() {
    const email = inpEmail.value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
        inpEmail.nextElementSibling.classList.add('hide');
    } else if (email.match(pattern)) {
        inpEmail.nextElementSibling.classList.remove('hide');
    }
}
function checkPhone() {
    const result = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return result.test(inpPhone.value);
}
function validatePhone(event) {
    const phone = inpPhone.value;
    if (!checkPhone(phone)) {
        inpPhone.nextElementSibling.classList.add('hide');
    } else if (checkPhone(phone)) {
        inpPhone.nextElementSibling.classList.remove('hide');
    }
}
 
