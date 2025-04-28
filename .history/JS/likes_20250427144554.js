// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
