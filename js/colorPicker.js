let colorIndex = 1;
const colorPicks = document.querySelectorAll(".color-pick");
const colorVariants = document.querySelectorAll(".color-variant");

showColor(colorIndex);

function showColor(number) {
  colorIndex = number - 1;

  colorVariants.forEach((colorVariant) => {
    colorVariant.style.display = "none";
  });

  colorPicks.forEach((colorPick) => {
    colorPick.classList.remove("active");
  });

  colorVariants[colorIndex].style.display = "block";
  colorPicks[colorIndex].classList.toggle("active");
}

colorPicks.forEach((colorPick) => {
  colorPick.addEventListener("click", () => {
    if (colorPick.classList.contains("white")) {
      showColor(1);
    } else if (colorPick.classList.contains("black")) {
      showColor(2);
    } else if (colorPick.classList.contains("brown")) {
      showColor(3);
    }
  });
});
