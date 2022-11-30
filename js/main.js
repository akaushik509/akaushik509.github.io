//Navigation bar effects on scroll

window.addEventListener("scroll" ,function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});




const menuBtn =document.querySelector(".nav-menu-btn");
const closeBtn =document.querySelector(".nav-close-btn");
const navigation =document.querySelector(".navigation");
const navItem =document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItem.forEach((navItem)=>{
    navItem.addEventListener("click", ()=>{
        navigation.classList.remove("active");
    })
})



