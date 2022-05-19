const bodyBackground = document.querySelector("body");
const button = document.querySelector("form#buttonForm input");

const color = [
  "#b5ffe1",
  "#edcfff",
  "#fce5b3",
  "#fcb3c4",
  "#c1b3fc",
  "#e0b3fc",
  "#fcd8b3",
  "#fcd8b3",
  "#adff8f",
  "edcfff"
];

function handleBackground(event) {
  event.preventDefault();
  // background.style.background = linear-gradient(270deg, #b5ffe1, #edcfff);
  // bodyBackground.bgColor = "blue";

  const rand_1 = Math.floor(Math.random() * 10) % color.length;
  const rand_2 = Math.floor(Math.random() * 10) % color.length;

  const bgColor_1 = color[rand_1];
  const bgColor_2 = color[rand_2];
  bodyBackground.style.backgroundImage = `linear-gradient(270deg, ${bgColor_1}, ${bgColor_2})`;
  // bodyBackground.bgColor = color[rand];
}

button.addEventListener("click", handleBackground);
