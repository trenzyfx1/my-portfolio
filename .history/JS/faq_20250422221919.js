// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", () => {

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");

        question.addEventListener("click", () => {
            const isActive = answer.classList.contains("active");

            document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("active"));
            document.querySelectorAll(".icon").forEach((icn) => {
                icn.textContent = "+";
                icn.style.transform = "rotate(0deg)";
            });

            if (!isActive) {
                answer.classList.add("active");
                icon.textContent = "✖";
                icon.style.transform = "rotate(45deg)";
            }
        });
    });
});

let year = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = year;

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const isExternal = link.hostname !== window.location.hostname;
  
      if (isExternal) {
        const confirmLeave = confirm("You are about to leave this site. Are you sure?");
        if (!confirmLeave) {
          e.preventDefault();
        }
      }
    });
  });
  
  