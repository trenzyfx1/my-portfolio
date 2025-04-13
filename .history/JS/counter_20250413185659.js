const counters = document.querySelectorAll('.counter');
let started = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;

    const updateCount = () => {
      const current = +counter.innerText.replace('+', '');
      if (current < target) {
        counter.innerText = `+${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = `+${target}`;
      }
    };

    updateCount();
  });
}

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const statsTop = statsSection.getBoundingClientRect().top;

  if (statsTop < window.innerHeight && !started) {
    started = true;
    runCounters();
  }
});
