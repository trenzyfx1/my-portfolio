// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.querySelector(".chat-toggle");
    const chatbot = document.querySelector(".chatbot");
    const closeChat = document.querySelector(".close-chat");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const suggestionsContainer = document.getElementById("chat-suggestions");
    const placeholder = document.getElementById("chat-placeholder");
    const botIntro = document.querySelector('.bot-intro');


    chatToggle.addEventListener('click', () => {
        chatbot.classList.toggle('active');
        botIntro.style.display = 'none';
        chatToggle.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatbot.classList.remove('active');
        chatToggle.style.display = 'block';
    });


    let messageHistory = [];

    if (!chatToggle || !chatbot || !closeChat || !chatBody || !chatInput || !sendBtn) {
        console.error("Bot initialization failed. Some elements are missing.");
        return;
    }

    chatToggle.addEventListener("click", () => {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
    });

    closeChat.addEventListener("click", () => {
        chatbot.style.display = "none";
    });

    

    function sendMessage(userText = chatInput.value.trim()) {
        if (userText === "") return;

        displayMessage(userText, "user");
        messageHistory.push(userText);
        if (messageHistory.length > 5) messageHistory.shift();

        displayTypingIndicator();

        setTimeout(() => {
            const botReply = getBotResponse(userText.toLowerCase());
            removeTypingIndicator();
            displayMessage(botReply, "bot");
        }, 1000);

        chatInput.value = "";
    }

    function displayMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");

        messageDiv.innerHTML = highlightKeywords(text);
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function displayTypingIndicator() {
        const typingDiv = document.createElement("div");
        typingDiv.id = "typing-indicator";
        typingDiv.className = "chat-message bot-message typing";
        typingDiv.innerHTML = `<span>Trenzy Bot is typing</span><span class="dots">...</span>`;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById("typing-indicator");
        if (typing) chatBody.removeChild(typing);
    }

    function highlightKeywords(text) {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        text = text.replace(urlPattern, `<a href="$1" target="_blank" class="highlight-link">$1</a>`);

        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi;
        text = text.replace(emailPattern, `<a href="mailto:$&" class="highlight-link">$&</a>`);

        return text;
    }

    chatInput.addEventListener("input", () => {
        if (chatInput.value.trim() !== "") {
            placeholder.style.display = "none";
        } else {
            placeholder.style.display = "block";
        }
    });

    function getBotResponse(userMessage) {
        const keywords = {
            // 🔹 Greetings
            "hello": "👋 Wagwan! How can I assist you today?",
            "whats up": "👋 am gud! How can I assist you today?",
            "hwfr": " 👊 omo your bot dey o how i fit help you today",
            "how far": " 👊 omo your bot dey o how i fit help you today",
            "hi": "🔥 Yo, what's good? Need any help?",
            "hey": "👊 Safe, bro! What can I do for you?",
            "good morning": "🌞 Good morning! Hope you’re having a productive day.",
            "good afternoon": "☀️ Good afternoon! Need any help?",
            "good evening": "🌙 Good evening! What’s up?",

            // 🔹 About Me & Experience
            "your name": "👤 I'm Christian Treasure, but you can call me Trenzy.",
            "about you": "💻 I'm Trenzy, a web developer specializing in frontend development.",
            "who are you": "🔥 I'm a passionate frontend developer with expertise in HTML, CSS, and JavaScript.",
            "experience": "🎯 I have 2+ years of experience and have worked with 10+ worldwide clients.",

            // 🔹 Resume & Portfolio
            "resume": "📄 You can view or download my resume by clicking the 'View Resume' button below the Recent Projects section.",
            "cv": "📄 My CV is available in the Resume section or you can download it directly.",
            "portfolio": "🚀 You can explore my portfolio as you like if u've got any problem am here for u.",
            "projects": "💼 My recent projects are listed in the 'Projects' section. Check them out!",
            "github": "🐙 You can check out my code on GitHub: [https://github.com/trenzyfx1]",

            // 🔹 Services & Skills
            "work samples": "💼 Go to the Projects section to see my work samples. You'll love what you find there!",
            "services": "🛠️ I specialize in frontend development, UI/UX design, and responsive web design.",
            "technologies": "⚡ I work with HTML, CSS, JavaScript, and Tailwind CSS.",
            "stack": "🚀 My tech stack includes HTML, CSS, JavaScript, and Tailwind CSS.",
            "e-commerce": "🛒 Yes! I can build e-commerce websites with a modern and responsive design.",
            "backend": "🖥️ I mainly focus on frontend, but I can collaborate with backend developers.",

            // 🔹 Contact & Hiring
            "contact": "📩 You can reach me through my contact page or email me at [Rolemodel987@gmail.com].",
            "email": "📧 You can email me at [Rolemodel987@gmail.com] for inquiries.",
            "hire": "💼 If you'd like to hire me, head to the Contact page.",
            "freelance": "🤝 Yes, I'm available for freelance work. Feel free to contact me!",
            "availability": "📆 I'm currently available for new projects. Let's work together!",

            // 🔹 Pricing & Work Process
            "pricing": "💰 My pricing depends on the project scope. Let's discuss your needs!",
            "payment method": "💳 I accept bank transfers, PayPal, and crypto payments.",
            "long-term projects": "⏳ Yes! I work on both short-term and long-term projects.",
            "project duration": "⏱️ The time to complete a project depends on its complexity. We can discuss timelines!",
            "workflow": "📝 My workflow includes planning, designing, developing, testing, and launching**.",

            // 🔹 Location
            "location": "🌍 I'm based in Nigeria, but I work with clients worldwide.",
        };

        for (let key in keywords) {
            if (userMessage.includes(key)) {
                return keywords[key];
            }
        }

        return "🤔 I'm not sure about that. Can you be more specific or ask differently?";
    }

    const suggestions = [
        "What services do you offer?",
        "Where can I download your resume?",
        "Do you have work samples?"
    ];

    if (suggestionsContainer) {
        suggestions.forEach(text => {
            const btn = document.createElement("button");
            btn.innerText = text;
            btn.classList.add("suggestion-btn");
            btn.onclick = () => sendMessage(text);
            suggestionsContainer.appendChild(btn);
        });
    }

    console.log("Bot loaded successfully with all enhancements.");
});


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const isExternal = link.hostname !== window.location.hostname;
        if (isExternal) {
            const confirmLeave = confirm("You are about to leave this site. Are you sure?");
            if (!confirmLeave) e.preventDefault();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const autoOpenMessage = document.getElementById('auto-open-message');
    const chatbot = document.querySelector('.chatbot');
    const closeMessageBtn = document.querySelector('.close-message-btn');

    setTimeout(function () {
        if (autoOpenMessage) autoOpenMessage.style.display = 'block';
    }, 3000);

    if (closeMessageBtn) {
        closeMessageBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (autoOpenMessage) autoOpenMessage.style.display = 'none';
        });
    }

    if (autoOpenMessage) {
        autoOpenMessage.addEventListener('click', function () {
            if (chatbot) chatbot.style.display = 'block';
            this.style.display = 'none';
        });
    }
});
