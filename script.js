const target_word = "nigger";

const input = document.getElementById("input");
const result = document.getElementById("result");
const target = document.getElementById("target");

let startTime = null;

function startGame() {
  input.value = "";
  input.disabled = false;
  result.innerHTML = "";
  startTime = null;

  target.textContent = "Type the word: " + target_word;
}

input.addEventListener("input", () => {
  let value = input.value;

  if (value.length === 1 && startTime === null) {
    startTime = Date.now();
  }

  if (value.length >= target_word.length) {
    let endTime = Date.now();
    let elapsed = (endTime - startTime) / 1000;

    result.innerHTML = `
      Your input: ${value} <br>
      Time: ${elapsed.toFixed(3)}s <br>
      ${value === target_word ? "Correct!" : "Incorrect!"}
    `;

    input.disabled = true;

    setTimeout(startGame, 2000);
  }
});

startGame();

let expression = "";

const display = document.getElementById("display");
const container = document.getElementById("buttons");

const buttonsData = [
  "7", "8", "9", "+", "C",
  "4", "5", "6", "-", "←",
  "1", "2", "3", "/", "^",
  ".", "0", "=", "x"
];

buttonsData.forEach(value => {
  const btn = document.createElement("button");
  btn.textContent = value;

  btn.addEventListener("click", () => handleClick(value));

  container.appendChild(btn);
});
// malpractice
function handleClick(value) {
  if (value === "C") {
    expression = "";
    display.textContent = "0";

  } else if (value === "←") {
    expression = expression.slice(0, -1);
    display.textContent = expression || "0";

  } else if (value === "=") {
    try {
      let safe = expression
        .replace(/x/g, "*")
        .replace(/\^/g, "**");

      let result = eval(safe);
      result = Math.round(result * 100000) / 100000;

      display.textContent = result;
      expression = result.toString();

    } catch {
      display.textContent = "Error";
      expression = "";
    }

  } else {
    expression += value;
    display.textContent = expression;
  }
}