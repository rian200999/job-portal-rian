window.initFaqLogic = function() {
    const navItems = document.querySelectorAll('.faq-nav-item');
    const groups = document.querySelectorAll('.faq-group');
    const questions = document.querySelectorAll('.faq-question');

    // 1. Logic Navigasi Kategori
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // Hapus status aktif dari semua tab
            navItems.forEach(i => i.classList.remove('active'));
            groups.forEach(g => g.classList.remove('active'));
            
            // Tambah status aktif ke tab yang diklik
            item.classList.add('active');
            const targetGroup = document.getElementById(target);
            targetGroup.classList.add('active');

            // Opsional: Tutup semua pertanyaan saat ganti tab biar rapi
            targetGroup.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('open');
            });
        });
    });

    // 2. Logic Accordion Buka/Tutup
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            
            // Cek apakah item yang di-klik udah kebuka
            const isOpen = parent.classList.contains('open');

            // Tutup semua pertanyaan lain di grup yang sama
            const currentGroup = parent.closest('.faq-group');
            currentGroup.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
            });
            
            // Kalau tadi nutup, sekarang buka (Toggle behavior)
            if (!isOpen) {
                parent.classList.add('open');
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initFaqLogic();
});