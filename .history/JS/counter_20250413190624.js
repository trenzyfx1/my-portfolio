document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.counter');
    let animationStarted = false;
    const speed = 100; // Lower number = faster animation

    function startCounters() {
        if (animationStarted) return;
        animationStarted = true;
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '');
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = '+' + Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = '+' + target;
                }
            };
            
            counter.innerText = '+0'; // Reset to 0 before starting
            updateCount();
        });
    }

    function checkIfInView() {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
        
        if (isVisible) {
            startCounters();
            window.removeEventListener('scroll', checkIfInView); // Stop checking after triggered
        }
    }

    // Initial check in case the section is already visible
    checkIfInView();
    
    // Add scroll listener
    window.addEventListener('scroll', checkIfInView);
});