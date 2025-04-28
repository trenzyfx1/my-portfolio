import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Structure: likes/{userId} = true
const likesRef = ref(db, 'likes');

document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('like-count');

    // Track total likes
    onValue(ref(db, 'totalLikes'), (snapshot) => {
        likeCount.textContent = `${snapshot.val() || 0} Likes`;
    });

    likeBtn.addEventListener('click', async () => {
        const user = auth.currentUser;
        
        if (!user) {
            alert("Please sign in to like!");
            return;
        }

        const userLikeRef = ref(db, `likes/${user.uid}`);
        const snapshot = await get(userLikeRef);

        if (snapshot.exists()) {
            alert("You already liked this!");
        } else {
            await set(userLikeRef, true);
            runTransaction(ref(db, 'totalLikes'), (count) => (count || 0) + 1);
        }
    });
});