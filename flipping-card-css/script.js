let cardBackHeight;
const cardFront = document.querySelector(".mdf");
maintainCardHeight();
window.addEventListener("resize", () => {
  maintainCardHeight();
});
function maintainCardHeight() {
  cardBackHeight = document.querySelector(".mdb").clientHeight;
  cardFront.style.height = cardBackHeight - 40 + "px";
}
