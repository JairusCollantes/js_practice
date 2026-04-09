const target_word = "hello";
let startTime = null;

document.getElementById("target").textContent =
  "Type the word: " + target_word;

const input = document.getElementById("input");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  let value = input.value;

  // start timer on first letter
  if (value.length === 1 && startTime === null) {
    startTime = Date.now();
  }

  // stop condition
  if (value.length >= target_word.length) {
    let endTime = Date.now();
    let elapsed = (endTime - startTime) / 1000;

    result.innerHTML = `
      Your input: ${value} <br>
      Target word: ${target_word} <br>
      Time taken: ${elapsed.toFixed(3)} seconds <br>
      ${value === target_word ? "Correct!" : "Incorrect!"}
    `;

    input.disabled = true;
  }
});