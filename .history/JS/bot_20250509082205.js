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

document.addEventListener("DOMContentLoaded", function() {
    const autoOpenMessage = document.getElementById('auto-open-message');
    const chatbot = document.querySelector('.chatbot');
    const chatToggle = document.querySelector('.chat-toggle');
    const closeChat = document.querySelector('.close-chat');
    const closeMessageBtn = document.querySelector('.close-message-btn');

    setTimeout(function() {
        if (autoOpenMessage) {
            autoOpenMessage.style.display = 'block';
        }
    }, 3000);

    if (closeMessageBtn) {
        closeMessageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (autoOpenMessage) {
                autoOpenMessage.style.display = 'none';
            }
        });
    }

    if (autoOpenMessage) {
        autoOpenMessage.addEventListener('click', function() {
            if (chatbot) chatbot.style.display = 'block';
            this.style.display = 'none';
        });
    }

    if (chatToggle && chatbot) {
        chatToggle.addEventListener('click', function() {
            chatbot.style.display = 'block';
            if (autoOpenMessage) autoOpenMessage.style.display = 'none';
        });
    }

    if (closeChat && chatbot) {
        closeChat.addEventListener('click', function() {
            chatbot.style.display = 'none';
        });
    }
});