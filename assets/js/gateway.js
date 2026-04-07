document.addEventListener('DOMContentLoaded', () => {
    // 1. SALARY SLIDER LOGIC
    const slider = document.getElementById('salarySlider');
    const counter = document.getElementById('salaryCounter');
    
    if(slider) {
        slider.addEventListener('input', (e) => {
            counter.innerText = e.target.value;
        });
    }

    // 2. LANGUAGE CHIPS LOGIC
    const chips = document.querySelectorAll('.l-chip');
    const bar = document.getElementById('matchBar');
    const matchText = document.getElementById('matchText');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Reset active
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            // Update Bar & Text
            const percentage = chip.getAttribute('data-job');
            const level = chip.innerText;
            bar.style.width = percentage;
            matchText.innerText = `${percentage} Loker tersedia untuk ${level}`;
        });
    });

    // 3. AUTO TICKER ANIMATION (SIMULASI)
    const ticker = document.getElementById('tickerContent');
    setInterval(() => {
        const first = ticker.firstElementChild;
        first.style.marginTop = "-50px";
        first.style.opacity = "0";
        
        setTimeout(() => {
            ticker.appendChild(first);
            first.style.marginTop = "0";
            first.style.opacity = "1";
        }, 500);
    }, 3000);
});