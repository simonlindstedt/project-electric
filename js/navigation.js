const menuButton = document.querySelector(".menu-button");
const navigationContent = document.querySelector(".navigation-content");
const links = navigationContent.querySelectorAll("a");
const contactButton = navigationContent.querySelector("li.contact");
const contactForm = document.querySelector(".contact-form");
const bp = 900;

windowCheck(bp);

window.onresize = function () {
  windowCheck(bp);
};

function windowCheck(breakPoint) {
  if (window.innerWidth > breakPoint) {
    menuButton.removeEventListener("click", toggleMenu);

    links.forEach(function (link) {
      link.removeEventListener("click", toggleMenu);
    });

    contactButton.addEventListener("click", toggleContact);

    if (
      navigationContent.classList.contains("active") ||
      menuButton.classList.contains("active")
    ) {
      navigationContent.classList.remove("active");

      menuButton.classList.remove("active");
    }
  } else if (breakPoint > window.innerWidth) {
    menuButton.addEventListener("click", toggleMenu);

    links.forEach(function (link) {
      link.addEventListener("click", toggleMenu);
    });

    contactButton.removeEventListener("click", toggleContact);

    if (
      contactButton.classList.contains("active") ||
      contactForm.classList.contains("active")
    ) {
      contactButton.classList.remove("active");

      contactForm.classList.remove("active");
    }
  }
}

function toggleMenu() {
  navigationContent.classList.toggle("active");
  menuButton.classList.toggle("active");
}

function toggleContact() {
  contactButton.classList.toggle("active");
  contactForm.classList.toggle("active");
}
