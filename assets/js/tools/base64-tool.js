document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('base64-input');
    const outputText = document.getElementById('base64-output');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');

    const encode = () => {
        const text = inputText.value;
        if (!text) {
            window.showToast('Please enter some text');
            return;
        }
        try {
            outputText.value = btoa(text);
            window.showToast('Encoded to Base64');
        } catch (err) {
            window.showToast('Encoding failed: ' + err.message);
        }
    };

    const decode = () => {
        const text = inputText.value;
        if (!text) {
            window.showToast('Please enter some text');
            return;
        }
        try {
            outputText.value = atob(text);
            window.showToast('Decoded from Base64');
        } catch (err) {
            window.showToast('Decoding failed: Invalid Base64 string');
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
