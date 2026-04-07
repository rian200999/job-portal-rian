window.initHeroLogic = function () {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        let ticking = false;

        card.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // Pembagi diperbesar sedikit agar pergerakan tidak terlalu ekstrim
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

                    // Efek shadow yang mengikuti arah kursor
                    const shadowX = (centerX - x) / 10;
                    const shadowY = (centerY - y) / 10;
                    card.style.boxShadow = `${shadowX}px ${shadowY + 20}px 40px rgba(230, 57, 70, 0.15)`;

                    ticking = false;
                });
                ticking = true;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            card.style.boxShadow = `0 20px 40px rgba(230, 57, 70, 0.08)`; // Kembali ke bayangan default di root CSS
            card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
};

// Pastikan logic berjalan saat DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
    initHeroLogic();
});