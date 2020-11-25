let imageIndex = 1;
showImage(imageIndex);

function changeImage(index) {
  showImage((imageIndex += index));
}

function currentImage(index) {
  showImage((imageIndex = index));
}

function showImage(index) {
  const images = document.querySelectorAll(".slide");

  if (index > images.length) {
    imageIndex = 1;
  } else if (index < 1) {
    imageIndex = images.length;
  }

  images.forEach(function (image) {
    image.style.display = "none";
  });

  images[imageIndex - 1].style.display = "block";
}
