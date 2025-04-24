document.addEventListener('DOMContentLoaded', function() {
    // Loading Animation
    const progressBar = document.querySelector('.progress-bar');
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    const welcomeSection = document.querySelector('.welcome');
    const gardenContent = document.querySelector('.garden-content');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
                welcomeSection.style.opacity = '1';
            }, 500);
        }
    }, 50);

    // Enter Button
    document.querySelector('.enter-btn').addEventListener('click', function() {
        welcomeSection.style.opacity = '0';
        setTimeout(() => {
            gardenContent.style.display = 'block';
        }, 500);
    });

    // Popup Logic
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupBody = document.querySelector('.popup-body');
    const closePopup = document.querySelector('.close-popup');

    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', function() {
            const categoryType = this.getAttribute('data-category');
            popupBody.innerHTML = `<h2>${categoryType} Content</h2><p>Details go here!</p>`;
            popupOverlay.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});
