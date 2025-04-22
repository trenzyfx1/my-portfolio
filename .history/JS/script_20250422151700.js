// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


const pagesLink = document.querySelector('.dropdown > .nav-link');
const dropdownMenu = document.querySelector('.dropdown-menu');

pagesLink.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !pagesLink.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});


const scrollElements = document.querySelectorAll(".scroll-zoom");

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

scrollElements.forEach((el) => scrollObserver.observe(el));

const typeEffect = document.getElementById("type-effect");
const titles = ["Frontend Developer", "Programmer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = titles[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    typeEffect.textContent = currentText;

    if (!isDeleting) {
        if (charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 60);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % titles.length;
            setTimeout(typeWriter, 1000);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.experience-card');

    cards.forEach(card => {
        const glow = card.querySelector('.experience-card');

        let moveGlow = (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 61, 255, 0.4), transparent)`;
        };

        card.addEventListener("mousemove", moveGlow);
        card.addEventListener("mouseleave", () => {
            glow.style.background = "linear-gradient(45deg, #9a5cff, #ff3dff, #9a5cff, #ff3dff)";
        });
    });
});


const track = document.querySelector(".skills-track");
if (track) {
    track.addEventListener("mouseover", () => {
        track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
    });
}

const video = document.getElementById('myVideo');
const videoBox = document.getElementById('videoBox');

videoBox.addEventListener('mouseenter', () => {
    video.play();
});

videoBox.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});

// Update current year in copyright
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("policy-date").textContent = new Date().toLocaleDateString();

// Smooth scroll back to top
document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Modal Functionality
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute("href");
        document.querySelector(modalId).style.display = "flex";
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal").style.display = "none";
    });
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});