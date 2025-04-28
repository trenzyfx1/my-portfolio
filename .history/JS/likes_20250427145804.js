// Your Firebase config
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

// Initialize Realtime Database
const db = firebase.database();

// Reference to likes counter
const likesRef = db.ref('likes/counter');

// Read and display the current likes
likesRef.on('value', (snapshot) => {
    const likes = snapshot.val() || 0;
    document.getElementById('like-count').innerText = `${likes} Likes`;
});

// Function to increase likes
function increaseLikes() {
    likesRef.transaction((currentLikes) => {
        return (currentLikes || 0) + 1;
    });
}
