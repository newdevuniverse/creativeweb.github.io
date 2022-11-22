const grey = document.getElementById("grey");
const white = document.getElementById("white");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

const button = document.querySelectorAll("button");

blue.addEventListener("click", changeToBlue);
function changeToBlue() {
  document.body.style.backgroundColor = "blue";
}

grey.addEventListener("click", changeToGrey);
function changeToGrey() {
  document.body.style.backgroundColor = "grey";
}

yellow.addEventListener("click", chnageToYellow);

function chnageToYellow() {
  document.body.style.backgroundColor = "yellow";
}

white.addEventListener("click", chnageToWhite);

function chnageToWhite() {
  document.body.style.backgroundColor = "White";
}
