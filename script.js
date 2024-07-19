document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".sidebar .music-library ul li");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

function playTrack(trackPath, element) {
  document.getElementById("audioPlayer").src = trackPath;
  document.getElementById("audioPlayer").play();

  document.querySelectorAll(".music-library li").forEach((item) => {
    item.classList.remove("active");
  });

  element.classList.add("active");

  document.querySelector(".songcontent").textContent = element.textContent;
}
