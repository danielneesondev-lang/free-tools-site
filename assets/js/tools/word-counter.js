document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('text-input');
    const wordCountDisplay = document.getElementById('word-count');
    const charCountDisplay = document.getElementById('char-count');
    const sentenceCountDisplay = document.getElementById('sentence-count');
    const readingTimeDisplay = document.getElementById('reading-time');
    const clearBtn = document.getElementById('clear-text');

    const updateCounts = () => {
        const text = textarea.value.trim();
        
        // Word count
        const words = text ? text.split(/\s+/).filter(word => word.length > 0) : [];
        wordCountDisplay.textContent = words.length;

        // Character count
        charCountDisplay.textContent = textarea.value.length;

        // Sentence count
        const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
        sentenceCountDisplay.textContent = sentences.length;

        // Reading time (average 200 words per minute)
        const readingTime = Math.ceil(words.length / 200);
        readingTimeDisplay.textContent = readingTime + (readingTime === 1 ? ' minute' : ' minutes');
    };

    textarea.addEventListener('input', updateCounts);

    clearBtn.addEventListener('click', () => {
        textarea.value = '';
        updateCounts();
        window.showToast('Text cleared');
    });
});
