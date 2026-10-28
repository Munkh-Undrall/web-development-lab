// DARK MODE
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeIcon.textContent = isDark ? "☀" : "☾";
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
});

// FLIP CARDS
const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".subject-card");

function updateFlipButton() {
    const allFlipped = [...cards].every((card) =>
        card.classList.contains("is-flipped")
    );

    flipToggle.setAttribute("aria-pressed", String(allFlipped));

    flipToggle.textContent = allFlipped
        ? "Бүх картыг буцаах ↻"
        : "Бүх картыг эргүүлэх ↻";
}

function flipCard(card) {
    card.classList.toggle("is-flipped");
    updateFlipButton();
}

// НЭГ КАРТЫГ ЭРГҮҮЛЭХ
cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        // Ар талын холбоосыг дарахад эргэлт давхардахгүй
        if (event.target.closest("a, button")) {
            return;
        }

        flipCard(card);
    });

    card.addEventListener("keydown", (event) => {
        if (event.target.closest("a, button")) {
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            flipCard(card);
        }
    });
});

// БҮХ КАРТЫГ ЭРГҮҮЛЭХ / БУЦААХ
flipToggle.addEventListener("click", () => {
    const shouldFlip =
        flipToggle.getAttribute("aria-pressed") !== "true";

    cards.forEach((card) => {
        card.classList.toggle("is-flipped", shouldFlip);
    });

    updateFlipButton();
});