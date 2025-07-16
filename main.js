// 1) Inject your links into the card
const links = [
  { name: 'GitHub',  url: 'https://github.com/your_username',   iconSrc: 'github.png' },
  { name: 'Discord', url: 'https://discord.gg/your_invite_code', iconSrc: 'discord.png' },
  { name: 'TikTok',  url: 'https://tiktok.com/@your_username',   iconSrc: 'tiktok.png' },
];
const container = document.getElementById('links');
links.forEach(link => {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = '_blank';
  a.className = 'link-item';
  a.innerHTML = `
    <img src="${link.iconSrc}" alt="${link.name}">
    <span>${link.name}</span>
  `;
  container.appendChild(a);
});

// 2) Grab elements
const bgAudio      = document.getElementById('background-audio');
const toggle       = document.getElementById('audio-toggle');
const enterOverlay = document.getElementById('enter-overlay');
const enterBtn     = document.getElementById('enter-btn');

// 3) Function to remove overlay and unlock audio
function enterSite() {
  bgAudio.play().catch(() => {});     // satisfy the "user gesture" requirement
  enterOverlay.style.transition = 'opacity 300ms';
  enterOverlay.style.opacity = '0';
  setTimeout(() => enterOverlay.remove(), 300);
}

// 4) Wire up the Enter overlay
enterBtn.addEventListener('click', enterSite);
enterOverlay.addEventListener('keydown', e => {
  if (e.key === 'Enter') enterSite();
});
// focus the button so that Enter key works immediately
enterBtn.focus();

// 5) Toggle button behavior
toggle.addEventListener('click', () => {
  if (bgAudio.paused) {
    bgAudio.play();
    toggle.classList.add('playing');
  } else {
    bgAudio.pause();
    toggle.classList.remove('playing');
  }
});

