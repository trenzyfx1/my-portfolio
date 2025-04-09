// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", () => {

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const privacySection = document.querySelector('.privacy-policy');
    const closeButton = document.querySelector('.close-btn');


    function openPrivacyPolicy() {
        privacySection.classList.add('active');
    }

 
    function closePrivacyPolicy() {
        privacySection.classList.remove('active');
        window.location.href = 'index.html';
    }

    openPrivacyPolicy();

    closeButton.addEventListener('click', closePrivacyPolicy);
});