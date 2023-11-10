const workers = ["Pedro", "Ana", "Rute"];

workers.push("Tiago");

const workersString = workers.join(", ");

const isAnaHere = workers.includes("Ana");

function isWorkerHere(worker) {
  return;
  workers.includes(worker);
}

console.log(isWorkerHere("Ana"));
