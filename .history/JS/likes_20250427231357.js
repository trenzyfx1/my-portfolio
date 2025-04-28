import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJdVGin4DZyvTtmTg6WnhAendyBGEm2gs",
    authDomain: "my-portfolio-8ce7d.firebaseapp.com",
    databaseURL: "https://my-portfolio-8ce7d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-portfolio-8ce7d",
    storageBucket: "my-portfolio-8ce7d.appspot.com",
    messagingSenderId: "1042582859597",
    appId: "1:1042582859597:web:03fa83c6d4318f8800d104",
    measurementId: "G-SYLJN4J1FV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const likesRef = ref(db, 'likes/counter');

document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('like-count');

    onValue(likesRef, (snapshot) => {
        likeCount.textContent = `${snapshot.val() || 0} Likes`;
    });

    likeBtn.addEventListener('click', () => {

        if (localStorage.getItem('alreadyLiked')) {
            alert('You have already liked!');
            return;
        }

        runTransaction(likesRef, (currentLikes) => {
            return (currentLikes || 0) + 1;
        });

        localStorage.setItem('alreadyLiked', 'true');
    });
});
