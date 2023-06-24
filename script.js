const hamburger = document.getElementById("hamburger");
const menuNav = document.querySelector(".menu-nav");

document.querySelector("#hamburger").onclick = () => {
  menuNav.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!menuNav.contains(e.target) && !hamburger.contains(e.target)) {
    menuNav.classList.remove("active");
  }
});
