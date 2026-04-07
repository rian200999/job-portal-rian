// Tambahkan fungsi reset ke dalam file JS kamu
window.resetFilters = function() {
    console.log("Resetting all filters...");
    
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    // Reset JLPT chips
    document.querySelectorAll('.jlpt-chips .chip').forEach(chip => {
        chip.classList.remove('active');
    });

    // Clear Salary
    document.querySelectorAll('.salary-input').forEach(input => {
        input.value = '';
    });

    // Simulasi: Sembunyikan empty state, munculkan feed
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('jobFeed').style.display = 'flex';
};

// Tambahin di dalem initJobListHeader kamu Yan
const setupSortDropdown = () => {
    const dropdown = document.getElementById('sortDropdown');
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const items = dropdown.querySelectorAll('.dropdown-item');
    const selectedText = dropdown.querySelector('.selected-text');
    const hiddenInput = document.getElementById('sortValue');

    // 1. Toggle Menu
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // 2. Select Item
    items.forEach(item => {
        item.addEventListener('click', () => {
            const val = item.getAttribute('data-value');
            const text = item.innerText;

            // Update UI
            selectedText.innerText = text;
            hiddenInput.value = val;
            
            // Toggle Class Active
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close Dropdown
            dropdown.classList.remove('active');
            
            console.log("Sort changed to:", val);
        });
    });

    // 3. Click outside to close
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
};

// Panggil di DOMContentLoaded
setupSortDropdown();