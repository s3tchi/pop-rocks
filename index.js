import { inputHandler } from "./inputHandler.js";

const dialogueContainer = document.querySelector(".dialogue-container");
const testButton = document.getElementById("test-button");
testButton.addEventListener("click", dialogueTest);

let skipAnimation = false;
inputHandler.onInputChange((key) => {
  if (key === "space") skipAnimation = true;
});

const DIALOGUE_SPEED_MS = 20;
async function displayDialogue(message, options) {
  skipAnimation = false;
  const dialogue = document.getElementById("dialogue");
  dialogue.textContent = "";
  for (const c of message) {
    dialogue.textContent += c;
    if (skipAnimation) continue;
    //wait
    await new Promise((res) => setTimeout(res, DIALOGUE_SPEED_MS));
  }
}
function dialogueTest() {
  dialogueContainer.removeAttribute("hidden");
  let randomText = "";
  for (let i = 0; i < getRandomInt(50, 480); i++) {
    const randomLetter = String.fromCharCode(getRandomInt(65, 90));
    randomText += randomLetter;
  }
  console.log({ randomText });
  displayDialogue(randomText);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
