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

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const subject = (formData.get("subject") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const body = [
      `お名前: ${name}`,
      `返信先: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:genki17green@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
