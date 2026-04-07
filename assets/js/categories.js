window.initCategoriesLogic = function() {
    const searchInput = document.getElementById('cat-search');
    const scrollWrapper = document.getElementById('categoryGrid');
    const chips = document.querySelectorAll('.chip-item');

    // 1. Search Filter
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        
        // Balik ke posisi awal scroll kalau lagi nyari
        scrollWrapper.scrollLeft = 0;

        chips.forEach(chip => {
            const text = chip.querySelector('.chip-text').innerText.toLowerCase();
            if (text.includes(val)) {
                chip.style.display = 'flex';
            } else {
                chip.style.display = 'none';
            }
        });
    });

    // 2. Auto-Highlight tiap 5 detik (Sesuai janji)
    let currentIndex = 0;
    setInterval(() => {
        // Cek dulu apakah ada chip yang kelihatan (biar gak error pas di-filter)
        const visibleChips = Array.from(chips).filter(c => c.style.display !== 'none');
        if (visibleChips.length > 0) {
            visibleChips.forEach(c => c.classList.remove('active'));
            currentIndex = (currentIndex + 1) % visibleChips.length;
            visibleChips[currentIndex].classList.add('active');
        }
    }, 5000);
};