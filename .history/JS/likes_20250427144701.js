// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Like button setup
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const likeRef = ref(database, 'likes');

// Get and display current like count
onValue(likeRef, (snapshot) => {
    likeCount.textContent = snapshot.val();
});

// When like button is clicked
likeBtn.addEventListener('click', () => {
    runTransaction(likeRef, (currentLikes) => {
        return (currentLikes || 0) + 1;
    });
});

const dislikeBtn = document.getElementById('dislikeBtn');
dislikeBtn.addEventListener('click', () => {
    runTransaction(likeRef, (currentLikes) => {
        return (currentLikes || 0) - 1;  // Decrement likes
    });
});