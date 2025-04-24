document.addEventListener('DOMContentLoaded', () => {
    // Enter Button Click
    const enterBtn = document.querySelector('.enter-btn');
    const welcomeSection = document.querySelector('.welcome');
    const gardenContent = document.querySelector('.garden-content');

    enterBtn.addEventListener('click', () => {
        welcomeSection.style.opacity = '0';
        setTimeout(() => {
            gardenContent.style.display = 'block';
        }, 500);
    });

    // Category Click
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            const popupBody = document.querySelector('.popup-body');
            const popupOverlay = document.querySelector('.popup-overlay');

            // Simple content example
            popupBody.innerHTML = `
                <h2 class="cute-font">${categoryType}</h2>
                <p>Your personalized content goes here! 🍣💖</p>
            `;
            popupOverlay.style.display = 'flex';
        });
    });

    // Close Popup
    document.querySelector('.close-popup').addEventListener('click', () => {
        document.querySelector('.popup-overlay').style.display = 'none';
    });
});
