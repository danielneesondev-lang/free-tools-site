document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('url-input');
    const outputText = document.getElementById('url-output');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');

    const encode = () => {
        const text = inputText.value;
        if (!text) {
            window.showToast('Please enter a URL or text');
            return;
        }
        try {
            outputText.value = encodeURIComponent(text);
            window.showToast('URL Encoded');
        } catch (err) {
            window.showToast('Encoding failed');
        }
    };

    const decode = () => {
        const text = inputText.value;
        if (!text) {
            window.showToast('Please enter an encoded URL');
            return;
        }
        try {
            outputText.value = decodeURIComponent(text);
            window.showToast('URL Decoded');
        } catch (err) {
            window.showToast('Decoding failed: Invalid encoding');
        }
    };

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    copyBtn.addEventListener('click', () => {
        if (!outputText.value) return;
        window.copyToClipboard(outputText.value, 'copy-btn');
    });

    clearBtn.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        window.showToast('Cleared');
    });
});
