let Video = document.querySelector("video");
let Height = Video.offsetHeight;
window.onscroll = function () {
  if (window.scrollY > Height) {
    Video.classList.add("down");
    Video.style.bottom = "-270px";
    document.querySelector(".container").style.height = `${Height}px`;
  } else {
    Video.classList.remove("down");
    Video.style.bottom = "0px";
  }
};
