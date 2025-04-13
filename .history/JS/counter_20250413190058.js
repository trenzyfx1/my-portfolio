document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the counter
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = '+' + Math.ceil(count + increment);
            const updateCount = setInterval(() => {
                const count = +counter.innerText.replace('+', '');
                if (count < target) {
                    counter.innerText = '+' + Math.ceil(count + increment);
                } else {
                    counter.innerText = '+' + target;
                    clearInterval(updateCount);
                }
            }, 1);
        } else {
            counter.innerText = '+' + target;
        }
    });
});