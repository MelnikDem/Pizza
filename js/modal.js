const couponsBtn = document.querySelector(".couponsBtn");
couponsBtn.addEventListener("click", ()=>{
  Swal.fire({
    title: 'Only this month 20% OFF of your entire order!',
    showClass: {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
})