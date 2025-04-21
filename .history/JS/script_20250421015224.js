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

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Active link on click
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


// document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.getElementById("menu-icon");
//     const menu = document.getElementById("menu");
//     const closeIcon = document.getElementById("close-icon");

//     menuIcon.addEventListener("click", function (event) {
//         event.stopPropagation();
//         menu.classList.toggle("active");
//     });

//     document.addEventListener("click", function (event) {
//         if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//             menu.classList.remove("active");
//         }
//     });

//     closeIcon.addEventListener("click", function () {
//         menu.classList.remove("active");
//     });
// });


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

let year = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = year;