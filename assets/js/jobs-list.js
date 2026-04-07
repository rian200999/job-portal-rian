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