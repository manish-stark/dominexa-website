
AOS.init({ once: true, duration: 1000 });

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
});

let index = 0;
const slides = document.querySelector(".slides");

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % 3;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + 3) % 3;
  showSlide();
}

/* AUTO SLIDE */
setInterval(() => {
  nextSlide();
}, 4000);

/*team slider*/

document.addEventListener("DOMContentLoaded", function () {

  let index = 0;
  const cards = document.querySelectorAll(".card");

  function updateSlider() {
    cards.forEach((card, i) => {
      card.classList.remove("active", "prev", "next");

      if (i === index) {
        card.classList.add("active");
      } 
      else if (i === (index - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      } 
      else if (i === (index + 1) % cards.length) {
        card.classList.add("next");
      }
    });
  }

  window.next = function () {
    index = (index + 1) % cards.length;
    updateSlider();
  };

  window.prev = function () {
    index = (index - 1 + cards.length) % cards.length;
    updateSlider();
  };

  // AUTO SLIDE
  setInterval(() => {
    next();
  }, 40000);

  updateSlider();
});

