window.addEventListener("scroll", navToggel);
const navigationBar = document.querySelector(".main_header");
function navToggel() {
  if (window.scrollY > 170) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
}
