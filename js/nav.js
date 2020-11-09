window.onscroll = function () {
  stickyMenu();
};

var navBar = document.getElementById("navigation");
var stick = navBar.offsetTop;
console.log(stick);

function stickyMenu() {
  if (window.pageYOffset >= stick) {
    navBar.classList.add("stick");
  } else {
    navBar.classList.remove("stick");
  }
}
