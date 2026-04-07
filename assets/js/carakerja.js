window.initFlowLogic = function() {
    const steps = document.querySelectorAll('.flow-step');
    
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            // Kita bisa tambahin sedikit animasi pada garis jika perlu
            console.log("Hovering step...");
        });
    });
};