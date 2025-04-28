<script type="module">
  // Import Firebase functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

  // Your web app's Firebase configuration
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
</script>
