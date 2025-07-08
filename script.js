let score = 0;
let correctColor = "";
let difficulty = "easy";

function startGame(level) {
    difficulty = level;
    generateBoard();
}

function generateBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    let count = difficulty === "easy" ? 3 : difficulty === "medium" ? 6 : 9;
    let colors = [];

    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    correctColor = colors[Math.floor(Math.random() * colors.length)];

    colors.forEach(color => {
        const card = document.createElement("div");
        card.className = "color-card";
        card.style.backgroundColor = color;
        card.onclick = () => checkAnswer(color);
        board.appendChild(card);
    });
}

function checkAnswer(selectedColor) {
    let message;
    if (selectedColor === correctColor) {
        message = "Correct!";
        if (difficulty === "easy") score += 10;
        else if (difficulty === "medium") score += 20;
        else score += 30;
    } else {
        message = "Wrong!";
        if (difficulty === "easy") score -= 5;
        else if (difficulty === "medium") score -= 10;
        else score -= 15;
    }
    alert(message);
    document.getElementById("score").innerText = "Score: " + score;
    generateBoard();
}
