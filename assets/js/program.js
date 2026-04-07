window.initLearningLogic = function() {
    // Interaktivitas difokuskan di CSS Hover untuk memaksimalkan Conversion Rate
    
    // (Opsional) Efek klik khusus untuk Featured Card
    const featuredBtn = document.querySelector('.btn-primary-jtc');
    if(featuredBtn) {
        featuredBtn.addEventListener('click', function(e) {
            // Bisa tambahkan logic tracking Google Analytics di sini nanti
            console.log("Tombol JTC Learning Hub (15jt) di-klik! 🚀");
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initLearningLogic();
});