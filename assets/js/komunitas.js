window.initCommunityLogic = function() {
    const section = document.getElementById('komunitas');
    const msg2 = document.querySelector('.msg-2');
    const msg3 = document.querySelector('.msg-3'); // Tambahin variabel msg3
    const typing = document.querySelector('.chat-typing');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // 1. Munculkan Lendra (0.8 detik setelah scroll)
                setTimeout(() => {
                    if(msg2) {
                        msg2.style.opacity = '1';
                        msg2.style.transform = 'translateY(0)';
                    }
                }, 800);

                // 2. Munculkan Alyssa (1.8 detik setelah scroll - ngasih jeda bentar)
                setTimeout(() => {
                    if(msg3) {
                        msg3.style.opacity = '1';
                        msg3.style.transform = 'translateY(0)';
                    }
                }, 1800);

                // 3. Typing indicator kelar/ilang (2.5 detik)
                setTimeout(() => {
                    if(typing) typing.style.display = 'none'; 
                }, 2500);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if(section) observer.observe(section);
};

document.addEventListener('DOMContentLoaded', () => {
    initCommunityLogic();
});