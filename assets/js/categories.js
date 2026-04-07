window.initCategoriesLogic = function() {
    const searchInput = document.getElementById('cat-search');
    const scrollWrapper = document.getElementById('categoryGrid');
    const chips = document.querySelectorAll('.chip-item');

    // 1. Search Filter (Realtime)
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        scrollWrapper.scrollLeft = 0; // Reset scroll ke kiri

        chips.forEach(chip => {
            const text = chip.querySelector('.chip-text').innerText.toLowerCase();
            if (text.includes(val)) {
                chip.style.display = 'flex';
                chip.style.animation = 'fadeIn 0.3s ease'; 
            } else {
                chip.style.display = 'none';
            }
        });
    });

    // 2. Drag to Scroll Logic (Untuk Desktop)
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scrollWrapper.offsetLeft;
        scrollLeft = scrollWrapper.scrollLeft;
        // Opsional: Matikan pointer-events di chip saat nge-drag biar link gak kepencet gak sengaja
        chips.forEach(c => c.style.pointerEvents = 'none');
    });

    scrollWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        chips.forEach(c => c.style.pointerEvents = 'auto');
    });

    scrollWrapper.addEventListener('mouseup', () => {
        isDown = false;
        chips.forEach(c => c.style.pointerEvents = 'auto');
    });

    scrollWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Angka 2 ini kecepatan scroll-nya
        scrollWrapper.scrollLeft = scrollLeft - walk;
    });

    // 3. Set Active State pas di-klik
    chips.forEach(chip => {
        chip.addEventListener('click', function(e) {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initCategoriesLogic();
});