const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    const closeIcon = document.getElementById("close-icon");

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    closeIcon.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
  

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.experience-card');

    cards.forEach(card => {
        const glow = card.querySelector('.experience-card');

        let moveGlow = (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 61, 255, 0.4), transparent)`;
        };

        card.addEventListener("mousemove", moveGlow);
        card.addEventListener("mouseleave", () => {
            glow.style.background = "linear-gradient(45deg, #9a5cff, #ff3dff, #9a5cff, #ff3dff)";
        });
    });
});



const track = document.querySelector(".skills-track");
if (track) {
    track.addEventListener("mouseover", () => {
        track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
    });
}

const video = document.getElementById("myVideo");
const videoBox = document.getElementById("videoBox");

videoBox.addEventListener("mouseenter", () => {
    video.muted = false;
    video.play();
});

videoBox.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


let year = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = year;

document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.querySelector(".chat-toggle");
    const chatbot = document.querySelector(".chatbot");
    const closeChat = document.querySelector(".close-chat");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    chatToggle.addEventListener("click", () => {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
    });

    closeChat.addEventListener("click", () => {
        chatbot.style.display = "none";
    });

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const userText = chatInput.value.trim();
        if (userText === "") return;

        displayMessage(userText, "user");

        setTimeout(() => {
            const botReply = getBotResponse(userText.toLowerCase());
            displayMessage(botReply, "bot");
        }, 500);

        chatInput.value = "";
    }

    function displayMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerText = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hi": "Hello! How can I assist you today?",
            "hello": "Hey there! Need any help?",
            "hola": "¡Hola! How can I help?",
            "hwfr": "Omo your bot dey o, how I fit help u today na",
            "wagwan": "Wagwan my G! Need help?",
            "yo": "Yo! Wassup? Need any help?",
            "sup": "Sup fam? How can I assist?",
            "good morning": "Good morning! Hope you’re having a great day!",
            "good afternoon": "Good afternoon! What can I do for you?",
            "good evening": "Good evening! Need any help?",
            "hey bot": "Hey hey! Trenzy Bot 🤖 at your service!",
            "hi there": "Hi there! How can I assist today?",
            "whats up": "What’s up G? Need help with something?",
            "hello mate": "Hello mate! How’s your day going?",
            "oi": "Oi oi! Need a hand?",
            "yo bot": "Yo! I’m here, what’s good?",
            "whats good": "Everything’s good, how about you?",
            "wag1": "Wag1 my G! Need assistance?",
            "aloha": "Aloha! How can I help?",
            "bonjour": "Bonjour! Comment puis-je vous aider?",
            "konichiwa": "Konichiwa! How can I assist you?",
            "salut": "Salut! What’s up?",
            "namaste": "Namaste! How can I help today?",
            "cya": "Cya! Come back anytime if you need help!",
            "hola amigo": "¡Hola amigo! ¿Cómo puedo ayudarte?",
            "hola bot": "¡Hola! Trenzy Bot 🤖 está aquí para ayudarte.",
            "hola hermano": "¡Hola hermano! ¿En qué puedo asistirte?",
            "hola qué tal": "¡Hola! ¿Qué tal? Dime en qué te ayudo.",
            "who are you": "I'm Trenzy Bot 🤖, your portfolio assistant!",
            "what can you do": "I can guide you through my projects, portfolio, and tech-related topics.",
            "where is your resume": "Scroll to the projects section and click 'view Resume'.",
            "what is premium tools": "Premium tools are advanced technologies I use for high-end projects.",
            "how did you build this site": "I built it using HTML, CSS, and JavaScript with clean animations.",
            "what projects have you worked on": "I've worked on multiple projects, including websites, web applications, and custom UI designs.",
            "do you work as a freelancer": "Yes! I take on freelance projects. Let me know what you need!",
            "how can I contact you": "You can contact me via my phone **+2347047889687** or email **rolemodel987@gmail.com**.",
            "do you have a GitHub": "Yes! Check out my GitHub for my latest projects and contributions. trenzyfx1",
            "can I hire you for a project": "Of course! Head over to the contact section to discuss your project.",
            "what skills do you have": "I specialize in HTML, CSS, JavaScript, and frontend development.",
            "do you work with React": "Right now, I focus on HTML, CSS, and JavaScript. But I might explore React in the future!",
            "do you offer mentorship": "Yes! I guide beginners on web development. Feel free to ask questions.",
            "how can I navigate your portfolio": "Use the navigation bar at the top or scroll to explore different sections.",
            "whats your latest project": "Check the projects section for my latest work and updates!",
            "what services do you offer": "I provide web development, UI design, and portfolio-building services.",
            "can you build e-commerce websites": "Yes! I can create professional and functional e-commerce websites.",
            "what technologies do you use": "I work with HTML, CSS, JavaScript, and various frontend tools.",
            "how long have you been coding": "I've been coding since 2024, growing my skills every day.",
            "where are you from": "I’m from Nigeria, grinding my way to the top! 🇳🇬",
            "who inspired you to code": "I got inspired by the passion for tech and the freedom to create.",
            "do you have certifications": "Yes! I have a certificate from WebDeves Company.",
            "can I see your portfolio": "You're already on it! Explore my projects and skills here.",
            "do you work with WordPress": "I focus on coding from scratch, but I can handle WordPress if needed.",
            "what makes your work unique": "I bring clean designs, smooth animations, and optimized performance.",
            "do you work with teams": "Yes! I collaborate with teams and developers worldwide.",
            "how do I download your resume": "Go to the projects section and click ‘Download Resume’.",
            "what is your design style": "I prefer a professional and sleek design for my projects.",
            "do you have experience with backend": "Right now, I specialize in frontend, but I'm open to learning backend tech.",
            "whats your dream project": "Building a game-changing web app that makes a difference.",
            "do you take small projects": "Yes, I handle both small and large projects. Let’s discuss yours!",
            "whats your favorite coding language": "JavaScript is my go-to language for dynamic web projects.",
            "do you have social media links": "Yes! Check my portfolio’s contact section for all my socials.",
            "whats your pricing for projects": "It depends on the project size and complexity. Contact me for a quote!",
            "do you do UI/UX design": "Yes! I create clean and user-friendly interfaces.",
            "whats your biggest project so far": "I’ve completed over 5 senior projects with advanced features.",
            "do you work with animations": "Yes! I use CSS and JavaScript animations for smooth effects.",
            "how can I learn web development": "Start with HTML, CSS, and JavaScript. Practice daily and build projects.",
            "whats your best coding advice": "Keep learning, stay consistent, and always build real projects!",
            "can I request a custom feature": "Yes! Let me know what you need, and I'll implement it.",
            "whats your future goal in tech": "To become a top-tier developer and build amazing digital experiences.",
            "can I collaborate with you": "Of course! Let’s work together on something great!",
            "where can I see client reviews": "Check the testimonials section on my portfolio.",
            "whats your phone number": "You can reach me at **+2347047889687**.",
            "whats your email": "You can contact me via email at **rolemodel987@gmail.com**."
        };

        return responses[input] || "I'm not sure about that. Try asking something related to my portfolio!";
    }
});
