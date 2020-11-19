let ind = 1;

showColor(ind);

function showColor(number) {
  image(number);
}

function image(number) {
  ind = number - 1;
  const slides = document.querySelectorAll(".slide");
  const colorPicks = document.querySelectorAll(".color-pick");

  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  colorPicks.forEach(function (colorPick) {
    colorPick.classList.remove("active");
  });

  slides[ind].style.display = "block";

  colorPicks[ind].classList.toggle("active");
}
