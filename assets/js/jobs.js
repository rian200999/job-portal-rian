window.initJobsLogic = function() {
    const jobItems = document.querySelectorAll('.job-row-item');

    jobItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Kita bisa nambahin efek suara hover tipis kalau mau
            console.log("Exploring Job...");
        });
        
        // Membuat seluruh baris bisa di-klik
        item.addEventListener('click', (e) => {
            if(!e.target.closest('.btn-detail')) {
                const link = item.querySelector('.btn-detail').getAttribute('href');
                window.location.href = link;
            }
        });
    });
};