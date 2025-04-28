
const firebaseConfig = {
    apiKey: "AIzaSyAJdVGin4DZyvTtmTg6WnhAendyBGEm2gs",
    authDomain: "my-portfolio-8ce7d.firebaseapp.com",
    databaseURL: "https://my-portfolio-8ce7d-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-8ce7d",
    storageBucket: "my-portfolio-8ce7d.appspot.com",
    messagingSenderId: "1042582859597",
    appId: "1:1042582859597:web:03fa83c6d4318f8800d104",
    measurementId: "G-SYLJN4J1FV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Reference to your likes counter document
const likesDoc = db.collection("likes").doc("counter");

let likes = 0;

// Load current likes
likesDoc.get().then(doc => {
    if (doc.exists) {
        likes = doc.data().count;
        document.getElementById('like-count').innerText = `${likes} Likes`;
    } else {
        // If no counter yet, create it
        likesDoc.set({ count: 0 });
    }
});

// Function to increase likes
function increaseLikes() {
    likes++;
    likesDoc.update({ count: likes });
    document.getElementById('like-count').innerText = `${likes} Likes`;
}
