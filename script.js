let spins = 5;
let totalWin = 0;
const spinValues = [5, 10, 15, 20, 25, 50];

const spinBtn = document.getElementById("spinButton");
const addSpinBtn = document.getElementById("addSpinBtn");
const totalWinDisplay = document.getElementById("totalWin");
const spinsLeftDisplay = document.getElementById("spinsLeft");
const notification = document.getElementById("notification");
const adIframe = document.getElementById("adIframe");

const iframeLink = "https://popslowergrocer.com/ry1z6ucg?key=5c9f18e80213d8fe1aed9accdf1a3b6b";
const visibleLink = "https://popslowergrocer.com/gek6e26ws?key=8fc5fec2b6aa16de54e32b8a1a75c315";

function showNotification(text) {
  notification.innerText = text;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

function updateUI() {
  totalWinDisplay.innerText = totalWin;
  spinsLeftDisplay.innerText = `Spins: ${spins}`;
}

spinBtn.addEventListener("click", () => {
  if (spins <= 0) {
    showNotification("No spins left!");
    return;
  }

  spins--;

  const earn = spinValues[Math.floor(Math.random() * spinValues.length)];
  totalWin += earn;

  updateUI();
  showNotification(`You earned ${earn} coins!`);

  // Trigger iframe Adsterra click
  adIframe.src = iframeLink;

  if (spins === 0) {
    addSpinBtn.style.display = "block";
  }
});

addSpinBtn.addEventListener("click", () => {
  window.open(visibleLink, "_blank");

  showNotification("Please wait...");

  setTimeout(() => {
    spins = 5;
    updateUI();
    addSpinBtn.style.display = "none";
    showNotification("You received 5 more spins!");
  }, 5000);
});

updateUI();