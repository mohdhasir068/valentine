// 🔐 Password
const PASSWORD = "love";

function unlock() {
  if (document.getElementById("pwd").value === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

// 😆 NO runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 240 + "px";
  noBtn.style.top = Math.random() * 240 + "px";
}

// 💖 YES → Fireworks
function sayYes() {
  document.getElementById("loveMessage").innerHTML =
    "She said YES 💍✨ My forever begins tonight ❤️";
  startFireworks();
}

// 📸 Slider
let photos = ["photos/pic1.jpg","photos/pic2.jpg","photos/pic3.jpg"];
let i = 0;
setInterval(() => {
  i = (i + 1) % photos.length;
  document.getElementById("slide").src = photos[i];
}, 2500);

// 💥 Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
      ctx.beginPath();
      ctx.arc(x + Math.random()*80, y + Math.random()*80, 3, 0, Math.PI*2);
      ctx.fill();
    }
  }, 300);
}
