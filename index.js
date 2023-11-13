document.addEventListener('DOMContentLoaded', function() {
    // Submit button
    document.getElementById('submitBtn').addEventListener('click', calculateBmi);

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', reload);
});

function calculateBmi() {
    // input fields
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // Check if values are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Display BMI
    document.getElementById('bmiValue').innerText = bmi;

    // Determine BMI category
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Healthy';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Overweight';
    } else if (bmi >= 30 && bmi <= 39.9) {
        bmiCategory = 'Obesity';
    } else {
        bmiCategory = 'Severe Obesity';
    }

    // Display BMI category
    document.getElementById('bmiCategory').innerText = bmiCategory;
}

function reload() {
    // Reset input fields
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';

    // Clear previous results
    document.getElementById('bmiValue').innerText = '';
    document.getElementById('bmiCategory').innerText = '';
}
