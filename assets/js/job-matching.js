window.initMatchingLogic = function() {
    const trigger = document.querySelector('.btn-upload-trigger');
    const input = document.getElementById('cvUpload');
    const scannerBox = document.querySelector('.scanner-box');
    const scanLine = document.querySelector('.scan-line');

    trigger.addEventListener('click', () => input.click());

    input.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            // Animasi Scanner jadi lebih cepat pas upload
            scanLine.style.animationDuration = '0.8s';
            trigger.innerText = "Analyzing CV...";
            
            setTimeout(() => {
                scanLine.style.animationDuration = '3s';
                trigger.innerText = "Match Found!";
                trigger.style.background = "#06c755"; // Berubah hijau sukses
                
                alert("AI berhasil menganalisis CV Anda. Mengarahkan ke hasil pencocokan...");
            }, 3000);
        }
    });
};