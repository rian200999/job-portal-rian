window.initMatchingLogic = function() {
    const trigger = document.querySelector('.btn-upload-trigger');
    const input = document.getElementById('cvUpload');
    const dropZone = document.getElementById('dropZone');
    const scanLine = document.querySelector('.scan-line');
    const uploadText = document.querySelector('.upload-text strong');

    // Memicu klik input file saat tombol ditekan
    trigger.addEventListener('click', () => input.click());

    // Fungsionalitas saat file dipilih
    input.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            
            // Ubah state UI ke "Scanning"
            scanLine.style.display = 'block'; // Tampilkan laser
            uploadText.innerText = "Analyzing CV...";
            trigger.innerText = "Scanning Data...";
            trigger.style.background = "var(--tp-primary)";
            dropZone.style.borderColor = "var(--tp-primary)";
            
            // Simulasi proses AI (3 detik)
            setTimeout(() => {
                scanLine.style.display = 'none'; // Matikan laser
                uploadText.innerText = "Match Found!";
                uploadText.style.color = "#10B981"; // Warna hijau
                
                trigger.innerText = "Lihat Hasil Matching";
                trigger.style.background = "#10B981"; 
                trigger.style.boxShadow = "0 10px 25px rgba(16, 185, 129, 0.25)";
                dropZone.style.borderColor = "#10B981";
                
                // Di sistem aslinya nanti, ini bisa diredirect ke halaman hasil pencarian
                console.log(`CV ${fileName} berhasil diproses.`);
            }, 3000);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initMatchingLogic();
});