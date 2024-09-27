let countdownInterval;

function startCountdown() {
    // Get the target date from the input
    const targetDate = new Date(document.getElementById('countdown-date').value).getTime();

    // Clear any previous countdowns
    clearInterval(countdownInterval);

    // Update the countdown every second
    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        // Calculate the time components
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        // If the countdown is over, stop the timer
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = "0";
            document.getElementById('hours').textContent = "0";
            document.getElementById('minutes').textContent = "0";
            document.getElementById('seconds').textContent = "0";
        }
    }, 1000);
}
