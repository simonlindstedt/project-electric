let index = 1;

showSlide(index);

function showSlide(number) {
  slides(number);
}

function slides(number) {
  index = number;

  let i;

  const slides = document.getElementsByClassName("slide");

  const colorPicks = document.getElementsByClassName("color-pick");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < colorPicks.length; i++) {
    colorPicks[i].className = colorPicks[i].className.replace(" active", "");
  }

  slides[index - 1].style.display = "block";

  colorPicks[index - 1].className += " active";
}
