document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  const menuLinks = document.querySelectorAll(".sidebar a");

  function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  burgerButton.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("goToTopBtn");
  const heroSection = document.querySelector(".hero-container");
  let showPoint;

  if (heroSection) {
    showPoint = heroSection.offsetHeight;
  } else {
    showPoint = window.innerHeight / 2;
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > showPoint) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }
  });

  topBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const labsToggle = document.getElementById("labs-toggle");
  const labsMenu = document.getElementById("labs-menu");

  if (labsToggle && labsMenu) {
    labsToggle.addEventListener("click", function () {
      labsMenu.classList.toggle("active");
      labsToggle.classList.toggle("active");
    });

    window.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown-container")) {
        labsMenu.classList.remove("active");
        labsToggle.classList.remove("active");
      }
    });
  }
});
