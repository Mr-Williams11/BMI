document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Submit button
    document.getElementById('submitBtn').addEventListener('click', calculateBmi);

    // Add event listener to the Clear button
    document.getElementById('clearBtn').addEventListener('click', reload);
});

function calculateBmi() {
    // Get values from input fields
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if values are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Display BMI
    alert("Your BMI is: " + bmi);

    // Determine BMI category
    var bmiCategory = '';
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
    alert("Your BMI category is: " + bmiCategory);
}

function reload() {
    // Reset input fields
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}
