let index = 1;

showSlide(index);

function showSlide(number) {
  slides(number);
}

function slides(number) {
  index = number;

  let i;

  const slides = document.getElementsByClassName("slides");

  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index - 1].style.display = "block";

  dots[index - 1].className += " active";
}
