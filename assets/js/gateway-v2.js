document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('jobPreviewList');
    const catBtns = document.querySelectorAll('.cat-btn');

    // Data Mockup Lowongan
    const jobsData = {
        backend: [
            { title: 'Senior Go Developer', comp: 'Sony Interactive', salary: '¥8.0M' },
            { title: 'Backend Lead (Node.js)', comp: 'Rakuten Group', salary: '¥9.5M' },
            { title: 'Python Engineer', comp: 'Mercari', salary: '¥7.2M' }
        ],
        frontend: [
            { title: 'React specialist', comp: 'LINE Corp', salary: '¥6.5M' },
            { title: 'Frontend Developer', comp: 'Zozotown', salary: '¥6.0M' }
        ],
        mobile: [
            { title: 'iOS Engineer', comp: 'Nintendo', salary: '¥8.5M' },
            { title: 'Android Developer', comp: 'PayPay', salary: '¥7.0M' }
        ],
        infra: [
            { title: 'DevOps Engineer', comp: 'AWS Japan', salary: '¥10M' }
        ]
    };

    // Fungsi Render List
    const renderJobs = (category) => {
        jobList.style.opacity = 0;
        
        setTimeout(() => {
            let html = '';
            jobsData[category].forEach(job => {
                html += `
                    <div class="preview-card" onclick="window.location.href='list-job.html'">
                        <div class="p-info">
                            <h6>${job.title}</h6>
                            <p>${job.comp} • Tokyo, Japan</p>
                        </div>
                        <div class="p-salary">${job.salary}</div>
                    </div>
                `;
            });
            jobList.innerHTML = html;
            jobList.style.opacity = 1;
        }, 200);
    };

    // Filter Logic
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderJobs(btn.getAttribute('data-filter'));
        });
    });

    // Initial Render
    renderJobs('backend');
});