const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("menuClose");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();   // 余計なクリックを止める
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});