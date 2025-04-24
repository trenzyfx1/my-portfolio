// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

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

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

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

        return "I'm not sure about that. Can you be more specific?";
    }

    console.log(getBotResponse("where can I download the resume?"));
    console.log(getBotResponse("do you have work samples?"));
    console.log(getBotResponse("how can I contact you?"));
    console.log(getBotResponse("yo, what's up?"));
    console.log(getBotResponse("tell me about you"));

});

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

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('auto-open-message').style.display = 'block';
    }, 3000);

    window.addEventListener('scroll', function () {
        document.getElementById('auto-open-message').style.display = 'none';
    });

    document.getElementById('auto-open-message').addEventListener('click', function () {
        document.querySelector('.chatbot').style.display = 'block';
        document.getElementById('auto-open-message').style.display = 'none';
    });

    document.querySelector('.chat-toggle').addEventListener('click', function () {
        document.querySelector('.chatbot').style.display = 'block';
        document.getElementById('auto-open-message').style.display = 'none';
    });

    document.querySelector('.close-chat').addEventListener('click', function () {
        document.querySelector('.chatbot').style.display = 'none';
    });
});
