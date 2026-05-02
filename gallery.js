document.addEventListener("DOMContentLoaded", function () {
  // =========================================
  // 1. LIGHTBOX LOGIC (Only runs if Lightbox exists)
  // =========================================
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    // Open Lightbox
    galleryItems.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add("active");
      });
    });

    // Helper: Update Image
    function updateLightboxImage() {
      const imageUrl = galleryItems[currentIndex].getAttribute("href");
      lightboxImg.setAttribute("src", imageUrl);
    }

    // Helper: Close
    function closeLightbox() {
      lightbox.classList.remove("active");
      lightboxImg.setAttribute("src", "");
    }

    // Event Listeners
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === this) {
        closeLightbox();
      }
    });

    // Keyboard Nav
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    });

    // Arrows
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        nextImage();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        prevImage();
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightboxImage();
    }

    function prevImage() {
      currentIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxImage();
    }
  }

  const goToTopBtn = document.getElementById("goToTopBtn");

  if (goToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        goToTopBtn.classList.add("visible");
      } else {
        goToTopBtn.classList.remove("visible");
      }
    });

    goToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
