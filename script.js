document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading progress
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
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                    
                    // Animate welcome section elements
                    setTimeout(() => {
                        welcomeSection.style.opacity = '1';
                    }, 100);
                }, 500);
            }, 300);
        }
    }, 50);
    
    // Enter button click
    document.querySelector('.enter-btn').addEventListener('click', () => {
        welcomeSection.style.opacity = '0';
        welcomeSection.style.pointerEvents = 'none';
        
        setTimeout(() => {
            gardenContent.style.display = 'block';
            
            // Animate categories in
            const categories = document.querySelectorAll('.category');
            categories.forEach((category, index) => {
                setTimeout(() => {
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            // Animate motivation section
            setTimeout(() => {
                document.querySelector('.motivation-section').style.opacity = '1';
                document.querySelector('.motivation-section').style.transform = 'translateY(0)';
            }, categories.length * 100 + 100);
        }, 500);
    });
    
    // Category hover effects
    document.querySelectorAll('.category').forEach(category => {
        // Initial state for animation
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'all 0.5s ease';
        
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-10px)';
            category.style.boxShadow = '0 15px 20px rgba(0,0,0,0.1)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(0)';
            category.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        });
    });
    
    // Motivation section initial state
    const motivationSection = document.querySelector('.motivation-section');
    motivationSection.style.opacity = '0';
    motivationSection.style.transform = 'translateY(20px)';
    motivationSection.style.transition = 'all 0.5s ease';
    
    // Popup functionality
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupTitle = document.querySelector('.popup-title');
    const popupIcon = document.querySelector('.popup-icon');
    const popupBody = document.querySelector('.popup-body');
    const closePopup = document.querySelector('.close-popup');
    
    // Category click handlers
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            openPopup(categoryType);
        });
    });
    
    // Close popup
    closePopup.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });
    
    // Close popup when clicking outside
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });
    
    // Function to open popup with specific content
    function openPopup(category) {
        popupOverlay.classList.add('active');
        
        switch(category) {
            case 'sushi':
                popupTitle.textContent = 'Sushi Guide';
                popupIcon.innerHTML = '🍣';
                popupBody.innerHTML = `
                    <h3>Kibo Sushi Picks 💕(Just for you :3)</h3>
                    <p><strong>Signature Rolls (Halal-friendly)</strong></p>
                    <ul>
                        <li>Salmon Lover Roll (no avocado) - $14.99</li>
                        <li>Cucumber Special Roll - $11.99</li>
                        <li>Vegetable Dragon Roll (no avocado) - $13.99</li>
                    </ul>
                    
                    <p><strong>Combo Time!</strong></p>
                    <ul>
                        <li>Salmon Sushi & Roll Combo A (specify no avocado) - $19.99</li>
                        <li>4 pcs salmon nigiri + 8 pcs salmon roll</li>
                        <li>Vegetable Combo B - $16.99</li>
                        <li>Cucumber roll + Carrot roll + Spinach roll</li>
                    </ul>
                    
                    <div class="popup-tip">
                        <p>💡 <strong>Tip:</strong> Always mention "No avocados please" and ask for lactose-free options!</p>
                    </div>
                `;
                break;
                
            case 'meals':
                popupTitle.textContent = 'Meal Plans';
                popupIcon.innerHTML = '🍱';
                popupBody.innerHTML = `
                    <h3>Weekly Meal Plan Suggestion</h3>
                    <ul class="meal-plan">
                        <li><strong>Monday Lunch:</strong> Kibo Sushi - Salmon Lover Roll</li>
                        <li><strong>Wednesday Dinner:</strong> Sushi Q - Veggie Paradise Combo</li>
                        <li><strong>Friday Treat:</strong> Sushi and Tea - Salmon Special</li>
                        <li><strong>Weekend Option:</strong> Mix and match from any location's vegetable rolls</li>
                    </ul>
                    
                    <h3>Main Dishes</h3>
                    <div class="meal-option">
                        <h4>Grilled Halal Beef Steak</h4>
                        <p>Ribeye or sirloin, seasoned with garlic-infused olive oil, rosemary, black pepper, paprika</p>
                    </div>
                    
                    <div class="meal-option">
                        <h4>Crispy Fried Chicken (Egg-Free)</h4>
                        <p>Halal chicken coated in rice flour with spices (paprika, cumin, turmeric)</p>
                    </div>
                `;
                break;
                
            case 'snacks':
                popupTitle.textContent = 'Snack Attack';
                popupIcon.innerHTML = '🍟';
                popupBody.innerHTML = `
                    <h3>Safe & Yummy Snacks</h3>
                    <div class="snack-option">
                        <h4>Potato Wedges</h4>
                        <p>Crispy, seasoned with rosemary, paprika, garlic oil</p>
                    </div>
                    
                    <div class="snack-option">
                        <h4>Halal Charcuterie Board</h4>
                        <p>Smoked halal turkey, lactose-free cheddar, olives, pickled carrots</p>
                    </div>
                    
                    <div class="snack-option">
                        <h4>Avocado Toast (Small Portion)</h4>
                        <p>Gluten-free toast with 1/8 avocado, paprika, chives</p>
                    </div>
                `;
                break;
                
            case 'chocolate':
                popupTitle.textContent = 'Chocolate Heaven';
                popupIcon.innerHTML = '🍫';
                popupBody.innerHTML = `
                    <h3>Your Chocolate Picks</h3>
                    <p>All low FODMAP and IBS-friendly!</p>
                    
                    <ul>
                        <li>Milk chocolate in moderation (like Lindt or Kinder)</li>
                        <li>Lactose-free chocolate chips</li>
                        <li>Chocolate rice cakes</li>
                        <li>Lactose-free hot cocoa</li>
                    </ul>
                    
                    <div class="chocolate-tip">
                        <p>💖 <strong>Remember:</strong> You deserve treats that don't hurt your tummy!</p>
                    </div>
                `;
                break;
                
            case 'relax':
                popupTitle.textContent = 'Relaxation Corner';
                popupIcon.innerHTML = '🧘‍♀️';
                popupBody.innerHTML = `
                    <h3>Mental Health Tools</h3>
                    
                    <div class="relaxation-option">
                        <h4>Breathing Exercise</h4>
                        <div class="breathing-visual">
                            <div class="breath-circle"></div>
                            <p>Breathe in... hold... breathe out</p>
                        </div>
                    </div>
                    
                    <div class="relaxation-option">
                        <h4>Guided Meditation</h4>
                        <audio controls>
                            <source src="assets/meditation.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    
                    <div class="relaxation-tip">
                        <p>🌸 <strong>Tip:</strong> Take 5 minutes just for yourself every day</p>
                    </div>
                `;
                break;
                
            case 'affirmations':
                popupTitle.textContent = 'Love Notes';
                popupIcon.innerHTML = '💝';
                popupBody.innerHTML = `
                    <h3>Just for You</h3>
                    
                    <div class="affirmation-card">
                        <p>You are beautiful inside and out</p>
                    </div>
                    
                    <div class="affirmation-card">
                        <p>Your kindness makes the world better</p>
                    </div>
                    
                    <div class="affirmation-card">
                        <p>You're stronger than you think</p>
                    </div>
                    
                    <div class="affirmation-card">
                        <p>You deserve happiness every day</p>
                    </div>
                    
                    <div class="affirmation-tip">
                        <p>💕 Read one whenever you need a boost!</p>
                    </div>
                `;
                break;
        }
    }
    
    // Rotate quotes
    const quotes = [
        "You're braver than you believe, stronger than you seem, and smarter than you think.",
        "Every flower blooms at its own pace.",
        "You is kind. You is smart. You is important.",
        "Progress, not perfection.",
        "You're doing amazing, sweetie!"
    ];
    
    const quoteElement = document.querySelector('.quote-text');
    let currentQuote = 0;
    
    function rotateQuote() {
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            quoteElement.textContent = quotes[currentQuote];
            quoteElement.style.opacity = '1';
        }, 500);
    }
    
    // Rotate every 10 seconds
    setInterval(rotateQuote, 10000);
});
