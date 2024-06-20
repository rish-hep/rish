document.addEventListener("DOMContentLoaded", function() {
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            timerElement.innerHTML = "The site is now live!";
        }
    }

    const x = setInterval(updateTimer, 1000);
    updateTimer();
});

