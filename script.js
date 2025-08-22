// Typing animation for the hero section
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".typed-text", {
    strings: ["Hi, I'm Dhanushree", "Web Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // Toggle navigation menu on small screens
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
