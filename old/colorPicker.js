let colorIndex = 1;

showColor(colorIndex);

function showColor(number) {
  image(number);
}

function image(number) {
  colorIndex = number - 1;
  const colorVariant = document.querySelectorAll(".color-variant");
  const colorPicks = document.querySelectorAll(".color-pick");

  colorVariant.forEach(function (slide) {
    slide.style.display = "none";
  });

  colorPicks.forEach(function (colorPick) {
    colorPick.classList.remove("color-pick-active");
  });

  colorVariant[colorIndex].style.display = "block";

  colorPicks[colorIndex].classList.toggle("color-pick-active");
}
