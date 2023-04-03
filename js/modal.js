const couponsBtn = document.querySelector(".couponsBtn");
couponsBtn.addEventListener("click", ()=>{
  Swal.fire({
    title: 'Only this month 20% OFF for CONSTRUCTED pizza',
    showClass: {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
})