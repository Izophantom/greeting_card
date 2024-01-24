// Дата отпуска
const vacationDate = new Date("2024-01-29T00:00:00Z").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = vacationDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Отпуск начался!";
  }
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);
