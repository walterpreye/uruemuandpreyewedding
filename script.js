const weddingDate = new Date("March 14, 2026 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Today is the day! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Days • ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds`;
}, 1000);
