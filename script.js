let coins = 0;
const spinBtn = document.getElementById('spinBtn');
const wheel = document.getElementById('wheel');
const coinsDisplay = document.getElementById('coins');
const smartlinkFrame = document.getElementById('smartlink');
const withdrawBtn = document.getElementById('withdrawBtn');

// Your Adsterra smart link (replace this with yours)
const SMART_LINK = "https://your-adsterra-smartlink.com";

// Function to spin the wheel
spinBtn.addEventListener('click', () => {
  const degree = Math.floor(720 + Math.random() * 720);
  wheel.style.transform = `rotate(${degree}deg)`;

  // Simulate reward
  const reward = Math.floor(Math.random() * 50) + 10;
  coins += reward;

  setTimeout(() => {
    coinsDisplay.textContent = coins;
    alert(`You won ${reward} coins!`);
  }, 2000); // matches wheel spin duration

  // Trigger invisible smart link click
  smartlinkFrame.src = SMART_LINK + "?t=" + new Date().getTime(); // bypass caching
});

// Fake Withdraw
withdrawBtn.addEventListener('click', () => {
  if (coins >= 1000) {
    alert("Success! Withdrawal request sent.");
  } else {
    alert("You need at least 1000 coins to withdraw.");
  }
});