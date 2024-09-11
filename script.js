document.addEventListener('DOMContentLoaded', function() {
    const flashcards = document.querySelectorAll('.flashcard');
    const flipButton = document.getElementById('flip-card');
    const nextButton = document.getElementById('next-card');

    let currentIndex = 0;

    // Show the first flashcard
    function showFlashcard(index) {
        flashcards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    // Initialize by showing the first flashcard
    showFlashcard(currentIndex);

    // Handle flip button click
    flipButton.addEventListener('click', function() {
        const activeCard = document.querySelector('.flashcard.active');
        if (activeCard) {
            activeCard.classList.toggle('flipped');
            flipButton.textContent = activeCard.classList.contains('flipped') ? 'Hide Answer' : 'Show Answer';
        }
    });

    // Handle next button click
    nextButton.addEventListener('click', function() {
        flashcards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % flashcards.length; // Move to the next card, loop back to the first
        showFlashcard(currentIndex);
        flipButton.textContent = 'Show Answer'; // Reset flip button text
        const activeCard = document.querySelector('.flashcard.active');
        if (activeCard) {
            activeCard.classList.remove('flipped'); // Ensure the card is not flipped
        }
    });
});