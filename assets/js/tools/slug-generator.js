document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('slug-input');
    const outputText = document.getElementById('slug-output');
    const copyBtn = document.getElementById('copy-slug');

    const generateSlug = () => {
        let text = inputText.value;
        if (!text) {
            outputText.value = '';
            return;
        }

        const slug = text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove non-word chars
            .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

        outputText.value = slug;
    };

    inputText.addEventListener('input', generateSlug);

    copyBtn.addEventListener('click', () => {
        if (!outputText.value) return;
        window.copyToClipboard(outputText.value, 'copy-slug');
    });
});
