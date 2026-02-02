// 🔐 PASSWORD
const PASSWORD = "love"; // change this

function unlock() {
  if (document.getElementById("pwd").value === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 😜";
  }
}

// ⏳ COUNTDOWN
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = valentineDate - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("timer").innerHTML =
    `⏳ ${d} days ${h} hrs ${m} mins to Valentine’s Day`;
}, 1000);

// 😆 NO BUTTON RUN AWAY
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 200 + "px";
}

// 💖 YES
function sayYes() {
  document.getElementById("loveMessage").innerHTML =
    "YAYYY 💕 You just made me the happiest person alive 😘";
}

// 📸 SLIDER
let photos = ["photos/pic1.jpg", "photos/pic2.jpg", "photos/pic3.jpg"];
let i = 0;
setInterval(() => {
  i = (i + 1) % photos.length;
  document.getElementById("slide").src = photos[i];
}, 2500);

// 🫶 SECRET
function revealLove() {
  document.getElementById("secret").innerHTML =
    "My heart chose you long ago ❤️";
}

// 📲 WHATSAPP
function openWhatsApp() {
  window.open("https://wa.me/919648453446?text=I%20said%20YES%20❤️");
}
