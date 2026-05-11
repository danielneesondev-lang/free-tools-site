document.addEventListener('DOMContentLoaded', () => {
    const jsonInput = document.getElementById('json-input');
    const beautifyBtn = document.getElementById('beautify-json');
    const minifyBtn = document.getElementById('minify-json');
    const validateBtn = document.getElementById('validate-json');
    const copyBtn = document.getElementById('copy-json');
    const clearBtn = document.getElementById('clear-json');

    const processJSON = (action) => {
        let text = jsonInput.value.trim();
        if (!text) {
            window.showToast('Please enter some JSON data');
            return;
        }

        try {
            const obj = JSON.parse(text);
            if (action === 'beautify') {
                jsonInput.value = JSON.stringify(obj, null, 4);
                window.showToast('JSON beautified!');
            } else if (action === 'minify') {
                jsonInput.value = JSON.stringify(obj);
                window.showToast('JSON minified!');
            } else if (action === 'validate') {
                window.showToast('Valid JSON!');
            }
        } catch (err) {
            console.error(err);
            window.showToast('Invalid JSON: ' + err.message);
        }
    };

    beautifyBtn.addEventListener('click', () => processJSON('beautify'));
    minifyBtn.addEventListener('click', () => processJSON('minify'));
    validateBtn.addEventListener('click', () => processJSON('validate'));

    copyBtn.addEventListener('click', () => {
        window.copyToClipboard(jsonInput.value, 'copy-json');
    });

    clearBtn.addEventListener('click', () => {
        jsonInput.value = '';
        window.showToast('Cleared');
    });
});
