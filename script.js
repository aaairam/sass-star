const dropDown = document.querySelectorAll(".links__item h4");
dropDown.forEach((dropDowns) => {
    dropDowns.addEventListener("click", () => {
        dropDowns.nextElementSibling.classList.toggle("open");
        dropDowns.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const blur = document.querySelector(".background");
const headerNav = document.querySelector(".header__mobile__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  blur.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const starNav=document.querySelectorAll(".star__nav__link");
const starContent=document.querySelectorAll(".coffee-tab_content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
})

function removeActiveStar(){
  starNav.forEach((star) =>{
    star.classList.remove("active");
  })
}
function removeActiveContent(){
  starContent.forEach((star) =>{
    star.classList.remove("active");
  })
}


const btop = document.querySelector(".backtotop");
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if  (window.pageYOffset >= 100) {
    btop.classList.add('show')
  }else {
    btop.classList.remove('show')
  }
});



