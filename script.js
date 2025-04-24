// script.js

function closeModal() {
  const modal = document.getElementById("welcomeModal");
  modal.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementById("closeBtn");

  // Show modal on page load
  modal.classList.remove("hidden");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Sushi data
  const sushiList = [
    {
      name: "Salmon Nigiri",
      description: "Fresh slices of salmon over seasoned rice 🍣",
      image: "https://example.com/salmon-nigiri.jpg",
      link: "https://www.ubereats.com/ca/store/sushi-place-1"
    },
    {
      name: "California Roll",
      description: "Crab, avocado & cucumber wrapped in rice & seaweed 🌊",
      image: "https://example.com/california-roll.jpg",
      link: "https://www.ubereats.com/ca/store/sushi-place-2"
    },
    {
      name: "Tuna Sashimi",
      description: "Thinly sliced raw tuna, rich and delicious 🐟",
      image: "https://example.com/tuna-sashimi.jpg",
      link: "https://www.ubereats.com/ca/store/sushi-place-3"
    },
    {
      name: "Shrimp Tempura Roll",
      description: "Crispy shrimp tempura with avocado and sauce 🍤",
      image: "https://example.com/shrimp-tempura.jpg",
      link: "https://www.ubereats.com/ca/store/sushi-place-4"
    }
  ];

  const sushiSection = document.getElementById("sushiSection");

  // Generate sushi cards
  sushiList.forEach((sushi) => {
    const card = document.createElement("div");
    card.className = "sushiCard";

    card.innerHTML = `
      <img src="${sushi.image}" alt="${sushi.name}" />
      <div class="content">
        <h3>${sushi.name}</h3>
        <p>${sushi.description}</p>
        <a href="${sushi.link}" target="_blank">Order Now</a>
      </div>
    `;

    sushiSection.appendChild(card);
  });
});
