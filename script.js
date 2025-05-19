let coins = 0;
let spinsLeft = 5;

const spinBtn = document.getElementById('spin-btn');
const coinDisplay = document.getElementById('coin-display');
const addSpinBtn = document.getElementById('add-spin-btn');
const hiddenAd = document.getElementById('hidden-ad');
const visibleAd = document.getElementById('visible-ad');

function spinWheel() {
  if (spinsLeft <= 0) {
    visibleAd.style.display = 'block';
    return;
  }

  // Trigger Adsterra direct link
  hiddenAd.src = "https://popslowergrocer.com/ry1z6ucg?key=5c9f18e80213d8fe1aed9accdf1a3b6b";

  // Random reward between 10 - 100
  let earned = Math.floor(Math.random() * 10) * 10 + 10;
  coins += earned;
  spinsLeft--;

  coinDisplay.textContent = `Coins: ${coins}`;
  alert(`You earned ${earned} coins!`);

  if (spinsLeft === 0) {
    addSpinBtn.style.display = 'block';
  }
}

spinBtn.addEventListener('click', spinWheel);

// When user clicks visible link, give 5 spins
addSpinBtn.addEventListener('click', () => {
  spinsLeft = 5;
  visibleAd.style.display = 'none';
  addSpinBtn.style.display = 'none';
});