const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const cardWidth = 320; // width + gap

function moveSlider() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// NEXT
nextBtn.onclick = () => {
  index++;
  moveSlider();

  // RESET (invisible jump)
  if (index >= cards.length / 2) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      moveSlider();

      setTimeout(() => {
        track.style.transition = "transform 0.6s ease";
      }, 50);
    }, 600);
  }
};

// PREV
prevBtn.onclick = () => {
  if (index <= 0) {
    track.style.transition = "none";
    index = cards.length / 2;
    moveSlider();

    setTimeout(() => {
      track.style.transition = "transform 0.6s ease";
      index--;
      moveSlider();
    }, 50);
  } else {
    index--;
    moveSlider();
  }
};

// AUTO
let auto = setInterval(() => {
  nextBtn.click();
}, 30000);

// HOVER STOP
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(auto);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
  auto = setInterval(() => {
    nextBtn.click();
  }, 30000);
});