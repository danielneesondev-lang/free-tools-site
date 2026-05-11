document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('color-input');
    const hexOutput = document.getElementById('hex-output');
    const rgbOutput = document.getElementById('rgb-output');
    const copyHex = document.getElementById('copy-hex');
    const copyRgb = document.getElementById('copy-rgb');
    const colorPreview = document.getElementById('color-preview');

    const updateColor = () => {
        const hex = colorInput.value.toUpperCase();
        hexOutput.value = hex;

        // Convert HEX to RGB
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        rgbOutput.value = rgb;

        colorPreview.style.backgroundColor = hex;
    };

    colorInput.addEventListener('input', updateColor);

    copyHex.addEventListener('click', () => {
        window.copyToClipboard(hexOutput.value, 'copy-hex');
    });

    copyRgb.addEventListener('click', () => {
        window.copyToClipboard(rgbOutput.value, 'copy-rgb');
    });

    // Initial update
    updateColor();
});
