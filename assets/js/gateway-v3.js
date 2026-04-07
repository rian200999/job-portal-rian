document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('departureList');
    const tabs = document.querySelectorAll('.plat-btn');

    const jobs = {
        tech: [
            { time: '14:20', pos: 'Backend Eng', comp: 'Sony', dest: 'Tokyo', status: 'Boarding' },
            { time: '14:45', pos: 'Go Developer', comp: 'Rakuten', dest: 'Osaka', status: 'On-Time' },
            { time: '15:10', pos: 'DevOps Lead', comp: 'LINE', dest: 'Fukuoka', status: 'On-Time' }
        ],
        'non-tech': [
            { time: '14:30', pos: 'Interpreter', comp: 'Toyota', dest: 'Nagoya', status: 'Boarding' },
            { time: '15:00', pos: 'Project Mgr', comp: 'Honda', dest: 'Saitama', status: 'On-Time' }
        ]
    };

    const renderBoard = (platform) => {
        list.innerHTML = '';
        jobs[platform].forEach((job, index) => {
            setTimeout(() => {
                const row = document.createElement('div');
                row.className = 'table-row';
                row.innerHTML = `
                    <div class="t-time">${job.time}</div>
                    <div class="t-job"><strong>${job.pos}</strong><span>${job.comp}</span></div>
                    <div class="t-dest">${job.dest}</div>
                    <div class="t-status">${job.status}</div>
                `;
                list.appendChild(row);
            }, index * 150);
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderBoard(tab.getAttribute('data-platform'));
        });
    });

    renderBoard('tech');
});