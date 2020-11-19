const contactButton = document.querySelector(".contact-button");
const contactContent = contactButton.querySelector(".contact-content");
const exitButton = contactContent.querySelector(".exit");

contactButton.addEventListener("click", onContactClick, true);

function onContactClick() {
  contactButton.classList.toggle("contact-button-active");
  contactContent.classList.toggle("contact-content-active");
  contactButton.removeEventListener("click", onContactClick, true);
  exitButton.addEventListener("click", onContactExit);
}

function onContactExit() {
  contactContent.classList.toggle("contact-content-active");
  contactButton.classList.toggle("contact-button-active");
  contactButton.addEventListener("click", onContactClick, true);
}
