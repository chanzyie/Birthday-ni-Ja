const pages = document.querySelectorAll('.page');
const music = document.getElementById('bday-song');

// 1. Page Flipping Logic
pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
    page.addEventListener('click', () => {
        if (page.style.transform === "rotateY(-180deg)") {
            page.style.transform = "rotateY(0deg)";
            setTimeout(() => { page.style.zIndex = pages.length - index; }, 300); 
        } else {
            page.style.transform = "rotateY(-180deg)";
            setTimeout(() => { page.style.zIndex = index + 1; }, 300);
        }
    });
});

// 2. Music Logic
function toggleMusic() {
    if (music.paused) {
        music.play().catch(e => console.log("Blocked"));
        document.getElementById('music-control').innerText = "⏸ Pause";
    } else {
        music.pause();
        document.getElementById('music-control').innerText = "🎵 Play";
    }
}

// 3. Floating Emoji Logic
function createEmoji() {
    const emojiLayer = document.getElementById('emoji-layer');
    if (!emojiLayer) return;
    
    const emojis = ['🎂', '✨', '💖', '🎉', '🎨', '🎈'];
    const span = document.createElement('span');
    span.className = 'floating-emoji';
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.fontSize = (Math.random() * 20 + 20) + 'px';
    span.style.animationDuration = (Math.random() * 2 + 3) + 's';

    emojiLayer.appendChild(span);
    setTimeout(() => { span.remove(); }, 5000);
}

setInterval(createEmoji, 400);