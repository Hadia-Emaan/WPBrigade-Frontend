document.addEventListener("DOMContentLoaded", function () {
  // ✅ NAVIGATION TOGGLE
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

  // ✅ VIDEO MODAL & HERO SLIDESHOW
  const videoModal = document.getElementById("videoModal");
  const youtubeFrame = document.getElementById("youtubeFrame");
  const closeModal = document.getElementById("closeModal");

  const heroSlides = [
    {
      heading: "GET READY FOR NEW ADIDAS BANDS",
      paragraph: "Adidas tracks all begin with a starting gate and end with a finish line. Discover the latest gear designed to elevate your performance on and off the track.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/fFnXvKFcrIY"
    },
    {
      heading: "SPRING COLLECTION IS HERE",
      paragraph: "Explore the tracks in a whole new way with our vibrant spring collection. From breathable fabrics to bold designs, it's time to refresh your athletic wardrobe.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/EqlxnbGSlE4"
    },
    {
      heading: "SPEED MEETS STYLE",
      paragraph: "Our latest shoes combine unmatched performance and modern elegance. Run faster, look sharper, and feel confident with every step you take.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/864B4rzoPog"
    }
  ];



  let currentSlide = 0;

  const headingEl = document.getElementById("heroHeading");
  const paragraphEl = document.getElementById("heroParagraph");
  const thumbnailEl = document.getElementById("heroThumbnail");
  const playIcon = document.getElementById("playIcon");
  const slideIndicatorContainer = document.getElementById("slideIndicator");

  // ✅ Create slide indicators
  heroSlides.forEach((_, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    if (index === 0) bar.classList.add("active");
    slideIndicatorContainer.appendChild(bar);
  });

  const indicatorBars = slideIndicatorContainer.querySelectorAll(".bar");

  function updateSlide(index) {
    const slide = heroSlides[index];
    headingEl.textContent = slide.heading;
    paragraphEl.textContent = slide.paragraph;
    thumbnailEl.src = slide.thumbnail;

    playIcon.onclick = () => {
      youtubeFrame.src = slide.videoURL;
      videoModal.style.display = "flex";
    };

    indicatorBars.forEach((bar, i) => {
      bar.classList.toggle("active", i === index);
    });
  }

  updateSlide(currentSlide);

  document.getElementById("nextBg").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateSlide(currentSlide);
  });

  document.getElementById("prevBg").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    updateSlide(currentSlide);
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

  // ✅ GALLERY THUMBNAILS
  const galleryImages = [
    "./Slicing/thubnail-slider-img.png",
    "./Slicing/thubnail-slider-img.png",
    "./Slicing/thubnail-slider-img.png",
    "./Slicing/thubnail-slider-img.png"
  ];

  const galleryContainer = document.querySelector(".image-gallery");

  galleryImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Image";
    img.classList.add("gallery-img");
    galleryContainer.appendChild(img);
  });

  // ✅ CARD SECTION
  const cardData = [
    {
      img: "./Slicing/post-img.png",
      title: "2019 NATIONAL CHAMPIONS CROWNED AT Reebok",
      text: "Membership has its perks. Joining ADIDAS means you can race at national and international levels with exclusive perks, merchandise, and community support from top-tier athletes."
    },
    {
      img: "./Slicing/post-img.png",
      title: "NEW BIKES LAUNCHING",
      text: "Stay tuned for our 2025 lineup launching soon! Featuring upgraded designs, enhanced performance, and lightweight materials crafted for champions."
    },
    {
      img: "./Slicing/post-img.png",
      title: "ADIDAS X NIKE COLLAB ANNOUNCED",
      text: "A historic partnership has just begun. Experience innovation, style, and comfort from two of the biggest names in sportswear coming together."
    }
  ];

  const cardContainer = document.getElementById("cardContainer");

  cardData.forEach((card, index) => {
    const maxWords = 12;
    const words = card.text.split(" ");
    const isLong = words.length > maxWords;
    const shortText = isLong ? words.slice(0, maxWords).join(" ") + "..." : card.text;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${card.img}" alt="Card Image">
      <div class="card-text">
        <h2 class="heading">${card.title}</h2>
        <p class="text" id="text-${index}">${shortText}</p>
      </div>
      ${isLong ? `<button class="read-more-btn" data-index="${index}">READ MORE</button>` : ""}
    `;

    cardContainer.appendChild(div);
  });

  function updateGalleryForMobile() {
  const isMobile = window.innerWidth <= 768;
  const galleryImgs = document.querySelectorAll(".gallery-img");

  galleryImgs.forEach((img, index) => {
    if (isMobile) {
      // Show only the first image on mobile
      img.style.display = index === 0 ? "block" : "none";
    } else {
      // Show all on desktop or tablet
      img.style.display = "block";
    }
  });
}

updateGalleryForMobile();
window.addEventListener("resize", updateGalleryForMobile);


  // Toggle Read More
  cardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("read-more-btn")) {
      const btn = e.target;
      const index = btn.getAttribute("data-index");
      const textEl = document.getElementById(`text-${index}`);
      const fullText = cardData[index].text;
      const maxWords = 12;

      const isExpanded = btn.textContent === "READ LESS";

      if (isExpanded) {
        const shortText = fullText.split(" ").slice(0, maxWords).join(" ") + "...";
        textEl.textContent = shortText;
        btn.textContent = "READ MORE";
      } else {
        textEl.textContent = fullText;
        btn.textContent = "READ LESS";
      }
    }
  });

  // ✅ EVENT CARDS
  const eventData = [
    { title: "SHOW IN USA", location: "USA" },
    { title: "ADIDAS COLLAB", location: "UK" },
    { title: "CHAMPIONSHIP", location: "CANADA" },
    { title: "TRACK OPENING", location: "GERMANY" }
  ];

  const eventContainer = document.getElementById("eventContainer");

  eventData.forEach((event, index) => {
    const div = document.createElement("div");
    div.className = "event-item";
    div.innerHTML = `
      <div class="event-number">${index + 1}</div>
      <div class="event-info">
        <p class="event-title">${event.title}</p>
        <hr>
        <p class="event-location">${event.location}</p>
      </div>
    `;
    eventContainer.appendChild(div);
  });


});
