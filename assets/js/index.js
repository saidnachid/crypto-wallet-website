let navTogglers = document.querySelectorAll("[data-nav-toggler]");
let navbar = document.querySelector("[data-navbar]");
let overlay = document.querySelector("[data-overlay]");

function navbarToggler() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

navTogglers.forEach((toggler) => {
  toggler.addEventListener("click", navbarToggler);
});

let header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
