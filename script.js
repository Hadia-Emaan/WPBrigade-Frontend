document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("close-nav");
  const nav = document.getElementById("top-nav");

  closeBtn?.addEventListener("click", () => {
    nav.style.display = "none";
  });

  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileSearch = document.getElementById("searchContainerMb");

  menuIcon?.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileSearch.classList.toggle("active");
  });

  const playIcon = document.querySelector(".play-icon");
  const videoModal = document.getElementById("videoModal");
  const youtubeFrame = document.getElementById("youtubeFrame");
  const closeModal = document.getElementById("closeModal");

  playIcon?.addEventListener("click", () => {
    youtubeFrame.src = "https://www.youtube.com/embed/gkIKphi2_P4";
    videoModal.style.display = "flex";
  });

  closeModal?.addEventListener("click", () => {
    youtubeFrame.src = "";
    videoModal.style.display = "none";
  });

  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      youtubeFrame.src = "";
      videoModal.style.display = "none";
    }
  });
});
