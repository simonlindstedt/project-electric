const contactButton = document.querySelector(".contact-button");
const contactContent = contactButton.querySelector(".contact-content");
const exitButton = contactContent.querySelector(".exit");
let isLarge = false;

contactButton.addEventListener("click", onContactClick, true);

function onContactClick() {
  console.log("Hello onContactClick");
  isLarge = toggle(isLarge);
  contactButton.classList.toggle("contact-button-active");
  contactContent.classList.toggle("contact-content-active");
  contactButton.removeEventListener("click", onContactClick, true);

  if (isLarge) {
    exitButton.addEventListener("click", onContactExit);
  }
}

function onContactExit() {
  console.log("Hello onContactExit");
  contactContent.classList.toggle("contact-content-active");
  contactButton.classList.toggle("contact-button-active");
  contactButton.addEventListener("click", onContactClick, true);
}

function toggle(bool) {
  if (bool) {
    return (bool = false);
  } else {
    return (bool = true);
  }
}
