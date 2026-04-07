window.initStatisticsLogic = function() {
    const cards = document.querySelectorAll('.stat-card');
    const numbers = document.querySelectorAll('.ticker-num');
    let currentIndex = 0;

    // 1. Animasi Angka Count-up
    const animateNumber = (el) => {
        const target = +el.getAttribute('data-target');
        let count = 0;
        const duration = 2500; // Dibikin sedikit lebih lama biar elegan
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // Pakai easeOutQuint formula biar melambat di akhir
            const easeProgress = 1 - Math.pow(1 - progress, 5); 
            count = Math.floor(easeProgress * target);
            
            el.innerText = count.toLocaleString('id-ID');
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.innerText = target.toLocaleString('id-ID');
            }
        };
        requestAnimationFrame(step);
    };

    // Jalankan animasi angka
    numbers.forEach(n => animateNumber(n));

    // 2. Auto-Highlight bergantian tiap 4 detik
    const shiftFocus = () => {
        cards.forEach(card => card.classList.remove('active'));
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add('active');
    };

    let tickerInterval = setInterval(shiftFocus, 4000);

    // 3. Interaksi Manual (Hover)
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            clearInterval(tickerInterval); // Stop auto-shift kalau user lagi nge-hover
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
        
        card.addEventListener('mouseleave', () => {
            currentIndex = index;
            // Jalanin lagi auto-shift-nya
            tickerInterval = setInterval(shiftFocus, 4000);
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initStatisticsLogic();
});