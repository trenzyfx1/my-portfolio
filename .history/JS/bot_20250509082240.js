// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.querySelector(".chat-toggle");
    const chatbot = document.querySelector(".chatbot");
    const closeChat = document.querySelector(".close-chat");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const suggestionsContainer = document.getElementById("chat-suggestions");

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

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
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
        // Turn URLs into clickable links
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        text = text.replace(urlPattern, `<a href="$1" target="_blank" class="highlight-link">$1</a>`);

        // Turn email into mailto
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi;
        text = text.replace(emailPattern, `<a href="mailto:$&" class="highlight-link">$&</a>`);

        return text;
    }

    function getBotResponse(userMessage) {
        // DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.querySelector(".chat-toggle");
    const chatbot = document.querySelector(".chatbot");
    const closeChat = document.querySelector(".close-chat");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const suggestionsContainer = document.getElementById("chat-suggestions");

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

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
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
        // Turn URLs into clickable links
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        text = text.replace(urlPattern, `<a href="$1" target="_blank" class="highlight-link">$1</a>`);

        // Turn email into mailto
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi;
        text = text.replace(emailPattern, `<a href="mailto:$&" class="highlight-link">$&</a>`);

        return text;
    }

    function getBotResponse(userMessage) {
        const keywords = {
            "hello": "👋 Wagwan! How can I assist you today?",
            "whats up": "👋 am gud! How can I assist you today?",
            "how far": "👊 omo your bot dey o how i fit help you today",
            "hi": "🔥 Yo, what's good? Need any help?",
            "hey": "👊 Safe, bro! What can I do for you?",
            "good morning": "🌞 Good morning! Hope you’re having a productive day.",
            "your name": "👤 I'm Christian Treasure, but you can call me Trenzy.",
            "about you": "💻 I'm Trenzy, a web developer specializing in frontend development.",
            "experience": "🎯 I have 2+ years of experience and have worked with 10+ worldwide clients.",
            "resume": "📄 You can view or download my resume by clicking the 'View Resume' button below the Recent Projects section.",
            "cv": "📄 My CV is available in the Resume section or you can download it directly.",
            "portfolio": "🚀 You can explore my portfolio freely. If u've got any issue, I dey here.",
            "projects": "💼 My recent projects are listed in the 'Projects' section. Check them out!",
            "github": "🐙 You can check out my code on GitHub: https://github.com/trenzyfx1",
            "services": "🛠️ I specialize in frontend development, UI/UX design, and responsive web design.",
            "stack": "🚀 My tech stack includes HTML, CSS, JavaScript, and Tailwind CSS.",
            "contact": "📩 You can reach me through my contact page or email me at Rolemodel987@gmail.com.",
            "hire": "💼 If you'd like to hire me, head to the Contact page.",
            "freelance": "🤝 Yes, I'm available for freelance work. Feel free to contact me!",
            "pricing": "💰 My pricing depends on the project scope. Let's discuss your needs!",
            "location": "🌍 I'm based in Nigeria, but I work with clients worldwide."
        };

        for (let key in keywords) {
            if (userMessage.includes(key)) {
                return keywords[key];
            }
        }

        return "🤔 I'm not sure about that. Can you be more specific or ask differently?";
    }

    // 🔥 Auto Suggestion Buttons
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

// External Link Warning
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const isExternal = link.hostname !== window.location.hostname;
        if (isExternal) {
            const confirmLeave = confirm("You are about to leave this site. Are you sure?");
            if (!confirmLeave) e.preventDefault();
        }
    });
});

// Welcome Message Prompt Logic
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


        for (let key in keywords) {
            if (userMessage.includes(key)) {
                return keywords[key];
            }
        }

        return "🤔 I'm not sure about that. Can you be more specific or ask differently?";
    }

    // 🔥 Auto Suggestion Buttons
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

// External Link Warning
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const isExternal = link.hostname !== window.location.hostname;
        if (isExternal) {
            const confirmLeave = confirm("You are about to leave this site. Are you sure?");
            if (!confirmLeave) e.preventDefault();
        }
    });
});

// Welcome Message Prompt Logic
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
