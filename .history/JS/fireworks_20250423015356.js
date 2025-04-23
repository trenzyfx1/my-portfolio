// Fireworks burst sequence
function launchFireworks() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    // Launch 5 fireworks in sequence
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        // Random position (x) and slight delay between bursts
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { 
            x: Math.random() * 0.8 + 0.1, // Random horizontal position (0.1-0.9)
            y: 0.3 // Start slightly above bottom
          },
          colors: colors,
          shapes: ['circle', 'star'],
          scalar: 1.2,
          gravity: 0.8,
          ticks: 200
        });
        
        // Add explosion sound (optional)
        if (typeof Audio !== 'undefined') {
          new Audio('https://assets.mixkit.co/sfx/preview/mixkit-explosion-impact-1684.mp3').play().catch(e => {});
        }
      }, i * 800); // 800ms between fireworks
    }
  }
  
  // In your existing load event listener:
  window.addEventListener('load', function() {
    if (!localStorage.getItem('confettiShown')) {
      launchFireworks(); // <-- Replace confetti() with this
      localStorage.setItem('confettiShown', 'true');
    }
  });