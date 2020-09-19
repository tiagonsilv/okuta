const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  doc.getElementsByClassName('dark_overlay')[0].style.display = "block";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  doc.getElementsByClassName('dark_overlay')[0].style.display = "none"
});
