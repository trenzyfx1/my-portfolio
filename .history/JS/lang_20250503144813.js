
  const translations = {
    en: {
      greeting: "Welcome to my site!",
      description: "This is a demo website with multiple languages.",
    },
    fr: {
      greeting: "Bienvenue sur mon site !",
      description: "Ceci est un site de démonstration multilingue.",
    },
    es: {
      greeting: "¡Bienvenido a mi sitio!",
      description: "Este es un sitio web de demostración multilingüe.",
    },
  };

  const langBtn = document.getElementById('lang-btn');
  const langOptions = document.getElementById('lang-options');
  const translatableElements = document.querySelectorAll('[data-i18n]');

  langBtn.addEventListener('click', () => {
    langOptions.classList.toggle('show');
  });

  langOptions.addEventListener('click', (e) => {
    const lang = e.target.closest('li')?.dataset?.lang;
    if (!lang) return;
    langOptions.classList.remove('show');

    // Update text
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key];
    });

    // Change flag icon
    langBtn.innerHTML = e.target.closest('li').innerHTML;
  });