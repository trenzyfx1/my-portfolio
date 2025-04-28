window.onload = function() {
    // Firebase configuration
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

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    const likesRef = db.ref('likes/counter');

    // Get DOM elements
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('like-count');

    // Real-time like counter updates
    likesRef.on('value', (snapshot) => {
        const likes = snapshot.val() || 0;
        if (likeCount) {
            likeCount.textContent = `${likes} Likes`;
        }
    });

    // Like button click handler
    likeBtn.addEventListener('click', () => {
        likesRef.transaction((currentLikes) => {
            return (currentLikes || 0) + 1;
        }).catch((error) => {
            console.error("Like failed: ", error);
        });
    });
};