const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = star.dataset.rating;
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

document.getElementById('submit-review').addEventListener('click', () => {
    const reviewText = document.getElementById('review-text').value;
    if (rating && reviewText) {
        const review = {
            rating,
            text: reviewText,
            date: new Date().toLocaleDateString()
        };

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.unshift(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        showToast("Thanks for rating, you're a G!");
        displayReviews();
        document.getElementById('review-text').value = '';
        stars.forEach(s => s.classList.remove('selected'));
        rating = 0;
    } else {
        alert('Please fill in the stars and feedback!');
    }
});

function displayReviews() {
    const container = document.getElementById('review-display');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    container.innerHTML = '';
    reviews.forEach(r => {
        const div = document.createElement('div');
        div.innerHTML = `
        <p><strong>Rating:</strong> ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</p>
        <p><strong>Feedback:</strong> ${r.text}</p>
        <p><em>${r.date}</em></p><hr/>
      `;
        container.appendChild(div);
    });
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

window.onload = displayReviews;
