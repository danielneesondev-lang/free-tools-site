import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('qr-text');
    const generateBtn = document.getElementById('generate-qr');
    const canvas = document.getElementById('qr-canvas');
    const downloadBtn = document.getElementById('download-qr');
    const qrContainer = document.getElementById('qr-result-container');

    const generateQR = async () => {
        const text = textInput.value.trim();
        if (!text) {
            window.showToast('Please enter some text or URL');
            return;
        }

        try {
            await QRCode.toCanvas(canvas, text, {
                width: 300,
                margin: 2,
                color: {
                    dark: '#0f172a',
                    light: '#ffffff'
                }
            });
            qrContainer.classList.remove('hidden');
            qrContainer.classList.add('flex');
            window.showToast('QR Code generated successfully!');
        } catch (err) {
            console.error(err);
            window.showToast('Failed to generate QR code');
        }
    };

    generateBtn.addEventListener('click', generateQR);

    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'freetools-hub-qr.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
