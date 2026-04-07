window.initArticlesLogicV2 = function() {
    // Logic khusus buat kolom kiri (Standard Card agar bisa diklik semua area)
    const standardCards = document.querySelectorAll('.tp-articles-redesign .standard-card');

    standardCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Mencegah konflik kalau user klik tepat di linknya
            if(e.target.tagName.toLowerCase() !== 'a' && e.target.parentElement.tagName.toLowerCase() !== 'a') {
                const link = this.querySelector('h3 a');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
        // Ubah kursor jadi pointer
        card.style.cursor = 'pointer';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initArticlesLogicV2();
});