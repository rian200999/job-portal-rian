window.initStatisticsLogic = function() {
    const items = document.querySelectorAll('.ticker-item');
    const numbers = document.querySelectorAll('.ticker-num');
    let currentIndex = 0;

    // 1. Fungsi Count-up Angka (Sekali jalan pas load)
    const animateNumber = (el) => {
        const target = +el.getAttribute('data-target');
        let count = 0;
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            count = Math.floor(progress * target);
            el.innerText = count.toLocaleString('id-ID');
            if (progress < 1) requestAnimationFrame(step);
            else el.innerText = target.toLocaleString('id-ID');
        };
        requestAnimationFrame(step);
    };

    numbers.forEach(n => animateNumber(n));

    // 2. Auto-Shift tiap 5 detik
    const shiftFocus = () => {
        items.forEach(item => item.classList.remove('active'));
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    };

    let tickerInterval = setInterval(shiftFocus, 5000);

    // 3. Hover/Click Manual
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            clearInterval(tickerInterval);
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
        
        item.addEventListener('mouseleave', () => {
            currentIndex = index;
            tickerInterval = setInterval(shiftFocus, 5000);
        });
    });
};