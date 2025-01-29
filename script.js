document.getElementById('startTest').addEventListener('click', function () {
    const startButton = this;
    startButton.disabled = true;
    startButton.innerText = 'Menghitung...';
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    setTimeout(() => {
        const downloadSpeed = (Math.random() * 100).toFixed(2);
        const uploadSpeed = (Math.random() * 50).toFixed(2);

        document.getElementById('downloadSpeed').innerText = `Kecepatan Download: ${downloadSpeed} Mbps`;
        document.getElementById('uploadSpeed').innerText = `Kecepatan Upload: ${uploadSpeed} Mbps`;

        document.getElementById('loader').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');

        startButton.innerText = 'Mulai Pengujian';
        startButton.disabled = false;
    }, 3000);
});
