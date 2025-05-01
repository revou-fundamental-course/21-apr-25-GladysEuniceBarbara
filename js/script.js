const form = document.getElementById('temperature-form');
const inputTemp = document.getElementById('input-temp');
const outputTemp = document.getElementById('output-temp');
const calculation = document.getElementById('calculation');
const resetBtn = document.getElementById('reset');
const reverseBtn = document.getElementById('reverse');
const inputLabel = document.getElementById('input-label');
const outputLabel = document.getElementById('output-label');
const introText = document.getElementById('intro-text');

let isReversed = false; // false = C to F, true = F to C

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputVal = parseFloat(inputTemp.value);
    if (isNaN(inputVal)) {
        alert('Masukkan nilai suhu yang valid.');
        return;
    }

    let result, formula;
    if (!isReversed) {
        result = (inputVal * 9 / 5) + 32;
        formula = `${inputVal}°C × (9/5) + 32 = ${result.toFixed(0)}°F`;
    } else {
        result = (inputVal - 32) * 5 / 9;
        formula = `(${inputVal}°F - 32) × 5/9 = ${result.toFixed(0)}°C`;
    }
    outputTemp.value = result.toFixed(2);
    calculation.value = formula;
});

resetBtn.addEventListener('click', function() {
    inputTemp.value = '';
    outputTemp.value = '';
    calculation.value = '';
});

reverseBtn.addEventListener('click', function() {
    isReversed = !isReversed;

    if (isReversed) {
        inputLabel.textContent = 'Fahrenheit (°F):';
        outputLabel.textContent = 'Celsius (°C):';
        introText.textContent = 'Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil dalam Celsius (°C).';
    } else {
        inputLabel.textContent = 'Celsius (°C):';
        outputLabel.textContent = 'Fahrenheit (°F):';
        introText.textContent = 'Masukkan suhu derajat Celsius (°C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil dalam Fahrenheit (°F).';
    }

    resetBtn.click();
});