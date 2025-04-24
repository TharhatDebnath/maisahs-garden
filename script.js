// script.js

// Modal control
const welcomeModal = document.getElementById('welcomeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModalBtn = document.getElementById('openModalBtn');

// Show the welcome modal when page loads
window.onload = () => {
  welcomeModal.style.display = 'flex';
};

// Close the welcome modal when clicking the close button
closeModalBtn.addEventListener('click', () => {
  welcomeModal.style.display = 'none';
});

// Close the modal if clicked outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === welcomeModal) {
    welcomeModal.style.display = 'none';
  }
});

// Sushi card modal functionality
const sushiCards = document.querySelectorAll('.sushiCard');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Function to open modal with sushi card details
sushiCards.forEach(card => {
  card.addEventListener('click', () => {
    const sushiName = card.querySelector('.content h3').innerText;
    const sushiDescription = card.querySelector('.content p').innerText;
    const sushiImage = card.querySelector('img').src;

    modalContent.innerHTML = `
      <h3>${sushiName}</h3>
      <img src="${sushiImage}" alt="${sushiName}" class="modalImage">
      <p>${sushiDescription}</p>
    `;
    
    modal.style.display = 'flex';
  });
});

// Close the modal when clicking the close button inside the modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if clicked outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Function to open the "Notes" section with content
const showNotes = () => {
  const noteSection = document.querySelector('.noteSection');
  noteSection.classList.toggle('hidden');
};
