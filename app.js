const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open"); // to change color 

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container  (to pop up main line)
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// domains container ( to pop up contents)
ScrollReveal().reveal(".domains__card", {
  ...scrollRevealOptions,
  interval: 500,
});


const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});