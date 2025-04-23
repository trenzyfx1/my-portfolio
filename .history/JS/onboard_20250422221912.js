// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
let autoSlide = setInterval(nextSlide, 4000);

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}


function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}


function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}


function stopAutoSlide() {
    clearInterval(autoSlide);
}


carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

carousel.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextSlide, 4000);
});


nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
});


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const isExternal = link.hostname !== window.location.hostname;
  
      if (isExternal) {
        const confirmLeave = confirm("You are about to leave this site. Are you sure?");
        if (!confirmLeave) {
          e.preventDefault();
        }
      }
    });
  });
  
  