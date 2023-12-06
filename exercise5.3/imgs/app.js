let indexer = 1;

const slideNodes = document.querySelectorAll(".slide");

const slideArray = [...slideNodes];

function getActiveIndex() {
  return slideArray.findIndex((slideNode) =>
    slideNode.classList.contains("active")
  );
}

function getNextSlide() {
  const activeIndex = getActiveIndex();

  let next = slideNodes[activeIndex + indexer];

  if (!next) {
    indexer = indexer * -1;
    next = slideNodes[activeIndex + indexer];
  }

  return next;
}

function executeSlideshow() {
  const currentSlide = slideNodes[getActiveIndex()];

  const nextSlide = getNextSlide();

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
}
setInterval(executeSlideshow, 2000);

const pauseButton = document.querySelector("#pauseBtn");
const playButton = document.querySelector("#playBtn");
const autoPlayButton = document.querySelector("#autoPlayBtn");

pauseButton.addEventListener("click", () => {
  clearInterval(autoPlayerInterval);
  autoPlayerInterval = undefined;
});
playButton.addEventListener("click", () => {
  executeSlideshow();
});
 autoPlayButton.addEventListener('click', () =>
