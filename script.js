document.addEventListener('DOMContentLoaded', () => {
    const spinNowBtn = document.getElementById('spin-now-btn');
    const addSpinBtn = document.getElementById('add-spin-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const remainingSpinsDisplay = document.getElementById('remaining-spins');
    const winningsDisplay = document.getElementById('winnings');
    const spinWheel = document.getElementById('spin-wheel');

    let remainingSpins = 2;
    let winnings = 0;

    function updateDisplay() {
        remainingSpinsDisplay.textContent = remainingSpins;
        winningsDisplay.textContent = winnings;
    }

    spinNowBtn.addEventListener('click', () => {
        if (remainingSpins > 0) {
            remainingSpins--;
            // Placeholder for spinning logic and win calculation
            console.log('Spinning the wheel...');
            // In a real app, you'd add animation and calculate win here
            // For now, let's just simulate a win
            const simulatedWin = Math.floor(Math.random() * 200); // Random win
            winnings += simulatedWin;
            alert(`You won ${simulatedWin} points! Total winnings: ${winnings}`);

        } else {
            alert('No remaining spins! Click "Add Spin" to get more.');
        }
        updateDisplay();
    });

    addSpinBtn.addEventListener('click', () => {
        // For demonstration, just add 1 spin
        remainingSpins += 1;
        alert('1 spin added!');
        updateDisplay();
    });

    withdrawBtn.addEventListener('click', () => {
        if (winnings > 0) {
            alert(`Withdrawing ${winnings} points. (This is a placeholder. Real withdrawal requires backend.)`);
            winnings = 0; // Reset winnings after simulated withdrawal
        } else {
            alert('No winnings to withdraw.');
        }
        updateDisplay();
    });

    // Initial display update
    updateDisplay();
});
