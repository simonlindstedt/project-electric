const overlay = document.querySelector("div#overlay");
const overlayImg = document.querySelector("img#overlay-img");

overlay.addEventListener("click", (e) => {
  overlayImg.classList.toggle("active");
});
