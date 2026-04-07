document.addEventListener('DOMContentLoaded', () => {
    const poly = document.getElementById('skillPolygon');
    const pills = document.querySelectorAll('.v4-pill');
    const matchText = document.getElementById('matchText');
    const matchComp = document.querySelector('#matchCompany h4');
    const matchLogo = document.querySelector('#matchCompany img');

    // Radar Points: Top, Right, Bottom, Left (Center is 100,100)
    const pointsData = {
        backend: {
            points: "100,30 160,100 100,170 40,100", // Algorithm & Language focus
            comp: "Sony Interactive Ent.",
            text: "Sangat cocok untuk Backend Engineer dengan fokus pada sistem terdistribusi & mikroservis.",
            logo: "https://ui-avatars.com/api/?name=Sony&background=000&color=fff"
        },
        frontend: {
            points: "100,60 180,100 100,120 170,100", // Framework & Teamwork focus
            comp: "Mercari, Inc.",
            text: "Cocok untuk Frontend Specialist yang menyukai tantangan UI/UX tingkat tinggi.",
            logo: "https://ui-avatars.com/api/?name=Mercari&background=f00&color=fff"
        },
        mobile: {
            points: "100,50 140,100 100,140 160,100", // Framework & Algorithm
            comp: "LINE Corp",
            text: "Cari peluang Mobile Dev terbaik untuk aplikasi messenger nomor 1 di Jepang.",
            logo: "https://ui-avatars.com/api/?name=LINE&background=00c300&color=fff"
        },
        devops: {
            points: "100,40 120,100 100,160 120,100", // Tech & Infra heavy
            comp: "Rakuten Group",
            text: "Kesempatan besar bagi DevOps Engineer untuk mengelola ekosistem cloud raksasa.",
            logo: "https://ui-avatars.com/api/?name=Rakuten&background=bf0000&color=fff"
        }
    };

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const role = pill.getAttribute('data-role');

            // Update UI
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Update Radar Polygon
            poly.setAttribute('points', pointsData[role].points);

            // Update Card
            matchComp.innerText = pointsData[role].comp;
            matchText.innerText = pointsData[role].text;
            matchLogo.src = pointsData[role].logo;
        });
    });
});