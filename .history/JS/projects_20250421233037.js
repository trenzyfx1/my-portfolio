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
