document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const calculateBtn = document.getElementById('calculate-age');
    const resultContainer = document.getElementById('age-result');
    const yearsDisplay = document.getElementById('age-years');
    const monthsDisplay = document.getElementById('age-months');
    const daysDisplay = document.getElementById('age-days');

    const calculateAge = () => {
        const dobValue = dobInput.value;
        if (!dobValue) {
            window.showToast('Please select a date of birth');
            return;
        }

        const dob = new Date(dobValue);
        const today = new Date();

        if (dob > today) {
            window.showToast('Date of birth cannot be in the future');
            return;
        }

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        yearsDisplay.textContent = years;
        monthsDisplay.textContent = months;
        daysDisplay.textContent = days;

        resultContainer.classList.remove('hidden');
        resultContainer.classList.add('grid');
        window.showToast('Age calculated!');
    };

    calculateBtn.addEventListener('click', calculateAge);
});
