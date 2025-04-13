document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-container');
    const counters = document.querySelectorAll('.counter');
    let animationStarted = false;
    const speed = 200; // Animation speed (lower = faster)

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = '+' + Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = '+' + target;
        }
    }

    function startCounters() {
        if (animationStarted) return;
        animationStarted = true;
        
        counters.forEach(counter => {
            counter.innerText = '+0'; // Reset to 0 before starting
            animateCounter(counter);
        });
    }

    function checkIfInView() {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = (
            rect.top <= window.innerHeight * 0.75 && // Trigger when 75% of element is in view
            rect.bottom >= 0
        );
        
        if (isVisible) {
            startCounters();
            window.removeEventListener('scroll', checkIfInView);
        }
    }

    // Check immediately in case section is already visible
    checkIfInView();
    
    // Add scroll listener
    window.addEventListener('scroll', checkIfInView);
});
