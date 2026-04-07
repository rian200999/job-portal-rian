window.initFlowLogic = function() {
    const section = document.getElementById('flow');
    const progressBar = document.getElementById('flow-progress');
    const stepCircles = document.querySelectorAll('.step-circle');

    // Fungsi untuk menjalankan animasi
    const animateFlow = () => {
        // Cek apakah di mobile atau desktop
        const isMobile = window.innerWidth <= 768;

        // Tarik garis progress
        setTimeout(() => {
            if(isMobile) {
                progressBar.style.height = '80%';
            } else {
                progressBar.style.width = '70%'; // 70% supaya mentok di buletan terakhir
            }
        }, 300);

        // Nyalakan bulatan satu per satu
        stepCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.classList.add('is-active');
            }, 600 * (index + 1)); // Delay berurutan (600ms, 1200ms, 1800ms)
        });
    };

    // Deteksi saat section masuk ke layar (Scroll Trigger)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateFlow();
                // Matikan observer kalau animasi udah jalan biar gak ngulang terus
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 }); // Trigger saat 40% section terlihat

    if(section) {
        observer.observe(section);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initFlowLogic();
});