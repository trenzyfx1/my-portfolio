// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", () => {
    
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('Christian Treasure').value;
        const email = document.getElementById('Email Address').value;
        const message = document.getElementById('Your Message Here').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
});
