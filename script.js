// Дата окончания отпуска (29.01.2024 в 17:15)
const vacationDate = new Date("2024-01-29T17:15:00Z").getTime() - (3 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = vacationDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  } else {
    document.getElementById("countdown").innerHTML = "Отпуск начался! Отлично отдохнуть!!!";
    clearInterval(interval); // Остановка интервала после достижения даты
  }
}

// Обновляем счетчик каждую секунду
const interval = setInterval(updateCountdown, 1000);
