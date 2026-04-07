window.initFaqLogic = function() {
    const navItems = document.querySelectorAll('.faq-nav-item');
    const groups = document.querySelectorAll('.faq-group');
    const questions = document.querySelectorAll('.faq-question');

    // 1. Kategori Filter
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            navItems.forEach(i => i.classList.remove('active'));
            groups.forEach(g => g.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // 2. Accordion Logic
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            
            // Tutup pertanyaan lain di grup yang sama
            const currentGroup = parent.parentElement;
            currentGroup.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parent) item.classList.remove('open');
            });
            
            parent.classList.toggle('open');
        });
    });
};