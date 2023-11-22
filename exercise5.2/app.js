import "styles.css";

let indexer = -1;

const slideNodes = document.querySelectorAll(".slides");

const slideArray = { ...slideNodes };

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

  currentSlide.classList.removal("active");
  nextSlide.classList.add("active");
}
setInterval(executeSlideshow, 2000);
