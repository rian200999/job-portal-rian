window.initJobsLogic = function() {
    const jobItems = document.querySelectorAll('.job-card-int');
    const bookmarks = document.querySelectorAll('.btn-bookmark');

    // 1. Logic Bookmark (Love Button)
    bookmarks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Biar pas klik bookmark, ga pindah halaman
            
            // Toggle class active
            btn.classList.toggle('active');
            
            // Ganti icon
            const icon = btn.querySelector('i');
            if(btn.classList.contains('active')) {
                icon.classList.remove('bx-bookmark-heart');
                icon.classList.add('bxs-bookmark-heart');
                // Kasih animasi kecil via JS
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => btn.style.transform = 'scale(1)', 200);
            } else {
                icon.classList.remove('bxs-bookmark-heart');
                icon.classList.add('bx-bookmark-heart');
            }
        });
    });

    // 2. Klik seluruh card untuk ke halaman detail
    jobItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Cek apakah yang diklik BUKAN tombol bookmark
            if(!e.target.closest('.btn-bookmark')) {
                const btnDetail = item.querySelector('.btn-apply-int');
                if (btnDetail && btnDetail.getAttribute('href') !== '#') {
                    window.location.href = btnDetail.getAttribute('href');
                }
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initJobsLogic();
});