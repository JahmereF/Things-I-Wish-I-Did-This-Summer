document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.getElementById('userName');
    const displayNameParagraph = document.getElementById('displayName');
    const wishInput = document.getElementById('wishInput');
    const addWishButton = document.getElementById('addWishButton');
    const wishCardsContainer = document.getElementById('wishCards');

    let wishes = [
        "Learn to surf",
        "Travel to a new country",
        "Read 5 books",
        "Go camping under the stars",
        "Master a new recipe"
    ];

    // Display user name
    userNameInput.addEventListener('input', () => {
        displayNameParagraph.textContent = `Hello, ${userNameInput.value || 'Guest'}!`;
    });

    // Function to generate HTML for a single wish card
    function generateWishCardHTML(wish) {
        return `
            <div class="wish-card">
                <p>${wish}</p>
            </div>
        `;
    }

    // Function to display all wishes
    function displayWishes() {
        wishCardsContainer.innerHTML = ''; // Clear existing cards
        wishes.forEach(wish => {
            wishCardsContainer.innerHTML += generateWishCardHTML(wish);
        });
    }

    // Add new wish functionality
    addWishButton.addEventListener('click', () => {
        const newWish = wishInput.value.trim();
        if (newWish) {
            wishes.push(newWish);
            wishInput.value = ''; // Clear input field
            displayWishes(); // Re-render all wishes
        }
    });

    // Initial display of wishes on page load
    displayWishes();
});