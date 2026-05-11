document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('bmi-height');
    const weightInput = document.getElementById('bmi-weight');
    const calculateBtn = document.getElementById('calculate-bmi');
    const resultVal = document.getElementById('bmi-value');
    const resultStatus = document.getElementById('bmi-status');
    const resultContainer = document.getElementById('bmi-result-card');

    const calculateBMI = () => {
        const height = parseFloat(heightInput.value) / 100; // cm to m
        const weight = parseFloat(weightInput.value);

        if (!height || !weight || height <= 0 || weight <= 0) {
            window.showToast('Please enter valid height and weight');
            return;
        }

        const bmi = (weight / (height * height)).toFixed(1);
        resultVal.textContent = bmi;

        let status = '';
        let colorClass = '';

        if (bmi < 18.5) {
            status = 'Underweight';
            colorClass = 'text-blue-400';
        } else if (bmi < 25) {
            status = 'Normal weight';
            colorClass = 'text-green-400';
        } else if (bmi < 30) {
            status = 'Overweight';
            colorClass = 'text-yellow-400';
        } else {
            status = 'Obese';
            colorClass = 'text-rose-400';
        }

        resultStatus.textContent = status;
        resultStatus.className = `text-2xl font-bold ${colorClass}`;
        resultContainer.classList.remove('hidden');
        window.showToast('BMI Calculated!');
    };

    calculateBtn.addEventListener('click', calculateBMI);
});
