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


document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    const closeIcon = document.getElementById("close-icon");

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    closeIcon.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});

<script>
  const section = document.getElementById('project-section');
  const cards = document.querySelectorAll('.project-card');

  function isInView(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    if (isInView(section)) {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 300);
      });

      // Only run once
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
</script>



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


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


let year = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = year;