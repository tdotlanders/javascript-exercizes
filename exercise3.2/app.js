function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const computerNumber = getRandom(0, 100);

console.log(`Número escolhido: ${computerNumber}`);

let turnCount = 1;
while (turnCount <= 10) {
  const userChoice = Number.parseInt(prompt("Escolhe um número"));

  if (userChoice > computerNumber) {
    console.log("Demasiado alto...");
  } else if (userChoice < computerNumber) {
    console.log("Demasiado baixo...");
  } else {
    console.log("Certo, acertaste!");
  }
}
turnCount += 1;
