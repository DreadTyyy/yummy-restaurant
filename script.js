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
const tittle = document.querySelectorAll(".scroll-up");
const scrollRight = document.querySelectorAll(".scroll-right");
const scrollLeft = document.querySelectorAll(".scroll-left");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll");
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < tittle.length; i++) {
  const elements = tittle[i];

  observer.observe(elements);
}
for (let i = 0; i < scrollRight.length; i++) {
  const scrollRights = scrollRight[i];

  observer.observe(scrollRights);
}
for (let i = 0; i < scrollLeft.length; i++) {
  const scrollLefts = scrollLeft[i];

  observer.observe(scrollLefts);
}
