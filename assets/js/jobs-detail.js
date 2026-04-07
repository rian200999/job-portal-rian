/**
 * JTC - Job Detail Logic
 * Menangani alur pendaftaran sesuai PRD
 */

const initJobDetailLogic = () => {
    const btnApply = document.getElementById('btnMainApply');

    // MOCK DATA (Ganti dengan data asli dari session backend)
    const userStatus = {
        isLoggedIn: true, // Ubah ke false untuk test flow login
        hasCV: false      // Ubah ke true untuk test flow apply langsung
    };

    btnApply.addEventListener('click', () => {
        // 1. Cek Login
        if (!userStatus.isLoggedIn) {
            alert("Silakan login/register terlebih dahulu.");
            window.location.href = "login.html";
            return;
        }

        // 2. Cek Data CV
        if (!userStatus.hasCV) {
            alert("Profil Anda belum lengkap. Silakan upload CV (PDF ATS) terlebih dahulu.");
            window.location.href = "upload-cv.html";
            return;
        }

        // 3. Flow Konfirmasi (Jika sudah login & ada CV)
        const confirmApply = confirm("Gunakan CV yang sudah tersimpan untuk melamar ke posisi ini?");
        if (confirmApply) {
            alert("Selamat! Lamaran Anda telah dikirim. Tim JTC akan meninjau profil Anda.");
            // Di sini arahkan ke dashboard/status lamaran
        }
    });
};

document.addEventListener('DOMContentLoaded', initJobDetailLogic);