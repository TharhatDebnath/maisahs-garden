document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.getElementById('main-content');
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    let progress = 0;
    const intervalTime = 30; // ms - How fast the loading simulates
    const totalTime = 1500; // ms - How long the loading takes
    const increments = 100 / (totalTime / intervalTime);

    // --- Loading Screen Simulation ---
    const loadingInterval = setInterval(() => {
        progress += increments;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            progressBar.style.width = '100%';
            // Show the enter button after a short delay
            setTimeout(() => {
                enterButton.style.display = 'block';
                // Ensure main content is ready but still hidden
                mainContent.style.opacity = '0'; // Start transparent before fade-in
                mainContent.classList.remove('hidden'); // Allow transitions/animations
            }, 300);
        }
        progressBar.style.width = progress + '%';
    }, intervalTime);

    // --- Enter Button ---
    enterButton.addEventListener('click', () => {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        // After fade out, hide it completely and fade in main content
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Fade in the main content
            mainContent.style.opacity = '1'; // This triggers the CSS transition on #main-content
             // Note: The 'fly-in' CSS animation should trigger automatically now
             // because the parent #main-content is no longer display:none or opacity:0
        }, 800); // Match CSS transition duration for loading screen fade-out
    });

    // --- Scrolling Progress Bar ---
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollableHeight = docHeight - winHeight;

        // Prevent division by zero if content height is less than window height
        if (scrollableHeight <= 0) {
             scrollProgressBar.style.width = '0%';
             return;
        }

        const scrollPercent = (scrollTop / scrollableHeight) * 100;
        scrollProgressBar.style.width = Math.min(scrollPercent, 100) + '%'; // Cap at 100%
    });

    // --- Modal Logic ---
    // Function to open a modal
    function openModal(modal) {
        if (modal) {
            modal.classList.add('active');
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close a modal
    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
             // Restore background scrolling only if no other modals are open
            const anyActiveModal = document.querySelector('.modal.active');
            if (!anyActiveModal) {
                document.body.style.overflow = '';
            }
        }
    }

    // Add click listeners to all modal triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
             event.preventDefault(); // Good practice for clickable elements acting like buttons
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    // Add click listeners to all close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Find the parent modal
            closeModal(modal);
        });
    });

    // Add click listener to modal background (overlay) to close
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            // Check if the click is directly on the modal background itself
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Optional: Close modal with the Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            closeModal(activeModal);
        }
    });

}); // End DOMContentLoaded
