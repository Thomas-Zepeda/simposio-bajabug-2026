document.addEventListener("DOMContentLoaded", function () {
  const ponentesCarousel = new Swiper(".ponentes-carousel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1000: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
});

const agendaTabs = document.querySelectorAll(".agenda-dia-btn");
const agendaContents = document.querySelectorAll(".agenda-content-box");
const agendaContainer = document.querySelector(".agenda-content-container");

agendaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const isAlreadyActive = tab.classList.contains("active");
    const targetId = tab.getAttribute("data-target");
    const targetContent = document.querySelector(targetId);
    agendaTabs.forEach((t) => t.classList.remove("active"));
    agendaContents.forEach((c) => c.classList.remove("active"));

    if (isAlreadyActive) {
      agendaContainer.classList.remove("active");
    } else {
      agendaContainer.classList.add("active");
      tab.classList.add("active");
      if (targetContent) {
        targetContent.classList.add("active");
      }
    }
  });
});

function updateAgendaStatus() {
  const now = new Date();

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll(".agenda-item").forEach((item) => {
    const startStr = item.getAttribute("data-start");
    const endStr = item.getAttribute("data-end");

    if (startStr && endStr) {
      const [startH, startM] = startStr.split(":").map(Number);
      const [endH, endM] = endStr.split(":").map(Number);

      const startTime = startH * 60 + startM;
      const endTime = endH * 60 + endM;

      if (currentMinutes >= startTime && currentMinutes < endTime) {
        item.classList.add("active-slot");
      } else {
        item.classList.remove("active-slot");
      }
    }
  });
}

// Ejecutar al cargar y cada minuto para mantener la agenda al día
window.addEventListener("DOMContentLoaded", () => {
  updateAgendaStatus();
  setInterval(updateAgendaStatus, 60000);
});
