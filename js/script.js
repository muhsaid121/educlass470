// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
//klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
//Desription box
const itemDetailDescription = document.querySelector(
  "#item-detail-description"
);
const itemDetailButton = document.querySelector(".item-detail-button");
itemDetailButton.onclick = (e) => {
  itemDetailDescription.style.display = "flex";
  e.preventDefault();
};
//klik tombol close
document.querySelector(".description .close-icon").onclick = (e) => {
  itemDetailDescription.style.display = "none";
  e.preventDefault();
};
