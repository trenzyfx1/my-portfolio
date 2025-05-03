// ===== Language Translations =====
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About me",
        nav_review: "Review",
        nav_pages: "Pages ▾",
        nav_projects: "Projects",
        nav_tools: "Tools",
        nav_contact: "Contact",
        nav_email: "Email",
        nav_experience: "Experience",
        nav_contact_me: "Contact Me"
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos de moi",
        nav_review: "Avis",
        nav_pages: "Pages ▾",
        nav_projects: "Projets",
        nav_tools: "Outils",
        nav_contact: "Contact",
        nav_email: "Email",
        nav_experience: "Expérience",
        nav_contact_me: "Contactez-moi"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_review: "Reseña",
        nav_pages: "Páginas ▾",
        nav_projects: "Proyectos",
        nav_tools: "Herramientas",
        nav_contact: "Contacto",
        nav_email: "Correo",
        nav_experience: "Experiencia",
        nav_contact_me: "Contáctame"
    }
};

// ===== DOM Selectors =====
const langBtn = document.getElementById('lang-btn');
const langOptions = document.getElementById('lang-options');
const translatableElements = document.querySelectorAll('[data-i18n]');

langBtn.addEventListener('click', () => {
    langOptions.classList.toggle('show');
});

langOptions.addEventListener('click', (e) => {
    const selected = e.target.closest('li');
    if (!selected) return;

    const lang = selected.dataset.lang;
    if (!translations[lang]) return;

    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langBtn.innerHTML = selected.innerHTML;

    langOptions.classList.remove('show');
});
