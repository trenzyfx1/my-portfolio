document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after it's shown
          }
        });
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );
  
    // Observe each section
    sections.forEach((section) => observer.observe(section));
  });
  