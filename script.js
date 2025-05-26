// script.js
let coins = 0;
const coinCountEl = document.getElementById("coin-count");
const spinButton = document.getElementById("spin-button");
const adIframe = document.getElementById("ad-iframe");

function updateCoinDisplay() {
  coinCountEl.textContent = `${coins} Coins`;
}

function getRandomReward() {
  const rewards = [20, 50, 100, 200];
  return rewards[Math.floor(Math.random() * rewards.length)];
}

function storeCoinsLocally(newCoins) {
  coins += newCoins;
  localStorage.setItem("coin_balance", coins);
  updateCoinDisplay();
}

function loadCoinsFromStorage() {
  const saved = localStorage.getItem("coin_balance");
  if (saved) {
    coins = parseInt(saved);
    updateCoinDisplay();
  }
}

spinButton.addEventListener("click", () => {
  const reward = getRandomReward();
  storeCoinsLocally(reward);
  adIframe.src = "https://example-smartlink.com"; // reload smart link
});

window.addEventListener("DOMContentLoaded", loadCoinsFromStorage);