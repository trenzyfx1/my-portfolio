
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Reset animation when out of view
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".hidden").forEach(section => {
        observer.observe(section);
    });
});



const track = document.querySelector(".skills-track");

track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});


function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let sendBtn = document.getElementById("sendBtn");

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;

    fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            sendBtn.textContent = "Success ✅";
        } else {
            sendBtn.textContent = "Decline ❌";
        }
    })
    .catch(() => {
        sendBtn.textContent = "Decline ❌";
    })
    .finally(() => {
        sendBtn.disabled = false;
    });
}
