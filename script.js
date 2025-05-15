let remainingSpins = 2;
let totalWinnings = 0;

const spinBtn = document.getElementById("spinBtn");
const addSpinBtn = document.getElementById("addSpinBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const spinsDisplay = document.getElementById("spins");
const winningsDisplay = document.getElementById("winnings");
const wheel = document.getElementById("wheel");
const smartlinkFrame = document.getElementById("smartlink");

const prizes = [20, 50, 70, 100, 120, 150, 200, 30]; // same count as segments on your image

spinBtn.onclick = () => {
  if (remainingSpins <= 0) {
    alert("No spins left. Please add more spins.");
    return;
  }

  // Trigger hidden smart link ad click
  smartlinkFrame.src = "https://popslowergrocer.com/ry1z6ucg?key=5c9f18e80213d8fe1aed9accdf1a3b6b&t=" + Date.now();

  remainingSpins--;
  spinsDisplay.textContent = remainingSpins;

  const angle = Math.floor(3600 + Math.random() * 720);
  wheel.style.transform = `rotate(${angle}deg)`;

  const reward = prizes[Math.floor(Math.random() * prizes.length)];

  setTimeout(() => {
    totalWinnings += reward;
    winningsDisplay.textContent = totalWinnings;
    alert(`You won ₹${reward}`);
  }, 3000);
};

addSpinBtn.onclick = () => {
  remainingSpins += 1;
  spinsDisplay.textContent = remainingSpins;
};

withdrawBtn.onclick = () => {
  if (totalWinnings >= 1000) {
    alert("Withdrawal successful!");
  } else {
    alert("You need ₹1000 to withdraw.");
  }
};