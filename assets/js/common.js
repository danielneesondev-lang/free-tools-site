// Common JavaScript for FreeTools Hub

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
    }

    // Tool Search Functionality
    const searchInput = document.getElementById('tool-search');
    const toolCards = document.querySelectorAll('.tool-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            toolCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Copy to Clipboard Utility
    window.copyToClipboard = (text, elementId = null) => {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
            if (elementId) {
                const el = document.getElementById(elementId);
                if (el) {
                    const originalText = el.textContent;
                    el.textContent = 'Copied!';
                    setTimeout(() => {
                        el.textContent = originalText;
                    }, 2000);
                }
            }
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    // Toast Notification
    window.showToast = (message) => {
        const existingToast = document.getElementById('toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-5 right-5 z-50 rounded-lg bg-brand-primary px-6 py-3 text-white shadow-lg animate-fade-in-up';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('animate-fade-out-down');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };
});
