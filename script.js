function showHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}