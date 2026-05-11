document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.getElementById('password-display');
    const generateBtn = document.getElementById('generate-password');
    const copyBtn = document.getElementById('copy-password');
    const lengthInput = document.getElementById('pass-length');
    const lengthValueDisplay = document.getElementById('pass-length-val');
    
    const uppercaseCheck = document.getElementById('include-uppercase');
    const lowercaseCheck = document.getElementById('include-lowercase');
    const numbersCheck = document.getElementById('include-numbers');
    const symbolsCheck = document.getElementById('include-symbols');

    const charset = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    const generatePassword = () => {
        let length = parseInt(lengthInput.value);
        let characters = '';
        
        if (uppercaseCheck.checked) characters += charset.upper;
        if (lowercaseCheck.checked) characters += charset.lower;
        if (numbersCheck.checked) characters += charset.numbers;
        if (symbolsCheck.checked) characters += charset.symbols;

        if (characters === '') {
            window.showToast('Please select at least one character type');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        passwordDisplay.value = password;
    };

    lengthInput.addEventListener('input', (e) => {
        lengthValueDisplay.textContent = e.target.value;
    });

    generateBtn.addEventListener('click', generatePassword);

    copyBtn.addEventListener('click', () => {
        if (!passwordDisplay.value) return;
        window.copyToClipboard(passwordDisplay.value, 'copy-password');
    });

    // Initial generate
    generatePassword();
});
