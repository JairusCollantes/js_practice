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