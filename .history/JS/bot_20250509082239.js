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
