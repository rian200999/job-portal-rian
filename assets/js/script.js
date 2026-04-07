const loadSection = async (containerId, filePath) => {
    try {
        const response = await fetch(filePath);
        const htmlText = await response.text();
        const container = document.getElementById(containerId);
        if (container) { container.innerHTML += htmlText; }
    } catch (error) { console.error(`Gagal memuat: ${filePath}`, error); }
};

document.addEventListener('DOMContentLoaded', async () => {
    await loadSection('app-content', './sections/hero.html');
    await loadSection('app-content', './sections/statistics.html');
    await loadSection('app-content', './sections/categories.html');
    await loadSection('app-content', './sections/jobs.html');
    await loadSection('app-content', './sections/carakerja.html');
    await loadSection('app-content', './sections/job-matching.html');
    await loadSection('app-content', './sections/program.html');
    await loadSection('app-content', './sections/komunitas.html');
    await loadSection('app-content', './sections/artikel.html');
    await loadSection('app-content', './sections/faq.html');
    
    if (typeof window.initHeroLogic === 'function') { window.initHeroLogic(); }
    if (typeof window.initStatisticsLogic === 'function') { window.initStatisticsLogic(); }
    if (typeof window.initCategoriesLogic === 'function') { window.initCategoriesLogic(); }
    if (typeof window.initJobsLogic === 'function') { window.initJobsLogic(); }
    if (typeof window.initFlowLogic === 'function') { window.initFlowLogic(); }
    if (typeof window.initMatchingLogic === 'function') { window.initMatchingLogic(); }
    if (typeof window.initLearningLogic === 'function') { window.initLearningLogic(); }
    if (typeof window.initCommunityLogic === 'function') { window.initCommunityLogic(); }
    if (typeof window.initArticlesLogic === 'function') { window.initArticlesLogic(); }
    if (typeof window.initFaqLogic === 'function') { window.initFaqLogic(); }

    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800 }); }
});