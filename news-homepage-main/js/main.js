const toggleBtn = document.querySelector(".navbar-toggler-btn");
const toggleMenu =document.getElementById("mobile-links");


toggleBtn.addEventListener("click" , () => {
  if(toggleBtn.classList.contains("active")){
    toggleBtn.classList.remove("active");
    toggleMenu.classList.remove("active");
  }
  else{
    toggleBtn.classList.add("active");
    toggleMenu.classList.add("active");
  }

})