const video = document.getElementById("mazoVideo");
const hint = document.getElementById("playerHint");
document.getElementById("year").textContent = new Date().getFullYear();
video.addEventListener("play", () => hint.classList.add("hidden"));
video.addEventListener("pause", () => {
  if (!video.ended) hint.classList.remove("hidden");
});
video.addEventListener("ended", () => hint.classList.remove("hidden"));
