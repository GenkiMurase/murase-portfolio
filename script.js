const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function updateDateTime() {
  if (!clock || !date) {
    return;
  }

  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  clock.textContent = timeFormatter.format(now);
  date.textContent = dateFormatter.format(now);
}

updateDateTime();
setInterval(updateDateTime, 1000);

const matrix = document.querySelector("#matrix");

if (matrix) {
  const cellCount = 40;
  const cells = [];

  for (let i = 0; i < cellCount; i += 1) {
    const cell = document.createElement("span");
    matrix.appendChild(cell);
    cells.push(cell);
  }

  function updateMatrix() {
    cells.forEach((cell, index) => {
      const active = (index + Math.floor(Date.now() / 300)) % 5 === 0;
      cell.classList.toggle("is-on", active);
    });
  }

  updateMatrix();
  setInterval(updateMatrix, 300);
}
