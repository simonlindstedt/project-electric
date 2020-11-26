const multiTech = document.querySelector(
  ".navigation-content a[href='#overlay']"
);

const techPage = document.querySelector(".full-page-item#tech");
const overlayPage = document.querySelector(".full-page-item#overlay");

multiTech.addEventListener("click", () => {
  let attr = multiTech.getAttribute("href");

  if (attr === "#tech") {
    window.scroll(techPage.offsetLeft, techPage.offsetTop);

    multiTech.removeAttribute("href", "#tech");

    multiTech.setAttribute("href", "#overlay");
  } else if (attr === "#overlay") {
    window.scroll(overlayPage.offsetLeft, overlayPage.offsetTop);

    multiTech.removeAttribute("href", "#overlay");

    multiTech.setAttribute("href", "#tech");
  }
});
