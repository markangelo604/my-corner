/* ============================================
   CONFIGURATION — Edit these to customize!
   ============================================ */

const SOCIALS = [
  {
    name: "Discord",
    handle: "@dmaku_lit",
    url: "https://discord.com/users/591857433048252447",
    icon: "../images/discord.svg",
    iconEmoji: "🎮",
  },
  {
    name: "YouTube",
    handle: "@dmaku_lit",
    url: "https://www.youtube.com/@dmaku_lit",
    icon: "../images/youtube.png",
    iconEmoji: "▶️",
  },
  {
    name: "Twitch",
    handle: "moooooooork_",
    url: "https://www.twitch.tv/moooooooork_",
    icon: "../images/twitch.svg",
    iconEmoji: "📺",
  },
  {
    name: "Steam",
    handle: "moooork",
    url: "https://steamcommunity.com/profiles/76561199211743376",
    icon: "../images/steam.svg",
    iconEmoji: "",
  },
  {
    name: "Xbox",
    handle: "moooork451",
    url: "https://www.xbox.com/en-US/play/user/moooork451",
    icon: "../images/xbox.svg",
    iconEmoji: "",
  },
];

// --- GAMES ---
const GAMES = [
  {
    emoji: "⚔️",
    title: "Arknights:Endfield",
    status: "Playing",
    note: "Casual Game",
  },
  {
    emoji: "🧙‍♂️",
    title: "League of Legends",
    status: "Suffering/5-man",
    note: "Why I am still playing this game? Just to suffer?",
  },
  {
    emoji: "⛏️",
    title: "Minecraft",
    status: "Occasionally",
    note: "Catching up with the updates",
  },
  {
    emoji: "🧱",
    title: "Roblox",
    status: "Occasionally",
    note: "Only playing with friends",
  },
  {
    emoji: "🌍",
    title: "Politics and War",
    status: "Casual",
    note: "Great Browser Game",
  },
];

// --- STUFF / POSTS ---
const STUFF = [
  {
    category: "QUOTE",
    title: "Stay Hungry. Stay Foolish.",
    description: "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    date: "Feb 2026",
  },
];

/* ============================================
   RENDERERS
   ============================================ */

function renderSocials() {
  const grid = document.getElementById("socialsGrid");
  if (!grid) return;

  grid.innerHTML = SOCIALS.map((s) => {
    const iconHTML = `
      <img
        src="${s.icon}"
        alt="${s.name} icon"
        class="social-icon"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
      />
      <span class="social-icon-emoji" style="display:none">${s.iconEmoji}</span>
    `;

    return `
      <a href="${s.url}" class="social-card reveal" target="_blank" rel="noopener noreferrer">
        <div style="display:flex;align-items:center;flex-shrink:0;">${iconHTML}</div>
        <div class="social-info">
          <div class="social-name">${s.name}</div>
          <div class="social-handle">${s.handle}</div>
        </div>
      </a>
    `;
  }).join("");
}

function renderGames() {
  const grid = document.getElementById("gamesGrid");
  if (!grid) return;

  grid.innerHTML = GAMES.map((g) => `
    <div class="game-card reveal">
      <div class="game-emoji">${g.emoji}</div>
      <div class="game-title">${g.title}</div>
      <div class="game-status">${g.status}</div>
      ${g.note ? `<div class="game-note">${g.note}</div>` : ""}
    </div>
  `).join("");
}

function renderStuff() {
  const grid = document.getElementById("stuffGrid");
  if (!grid) return;

  grid.innerHTML = STUFF.map((s) => `
    <div class="stuff-card reveal">
      <span class="stuff-tag">${s.category}</span>
      <div class="stuff-title">${s.title}</div>
      <div class="stuff-desc">${s.description}</div>
      <div class="stuff-date">${s.date}</div>
    </div>
  `).join("");
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
    observer.observe(el);
  });
}

/* ============================================
   NAV — HAMBURGER MENU
   ============================================ */
function initNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

/* ============================================
   FOOTER YEAR
   ============================================ */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderSocials();
  renderGames();
  renderStuff();
  setYear();
  initNav();
  // Run scroll reveal after render
  setTimeout(initScrollReveal, 50);
});