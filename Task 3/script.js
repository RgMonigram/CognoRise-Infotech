// Get references to the DOM elements
const bmiForm = document.getElementById('bmi-form');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');

// Function to calculate BMI
function calculateBMI(weight, height) {
    // No need to convert height as it's already in meters
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

// Function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

// Event listener for form submission
bmiForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Display BMI value
    bmiValue.textContent = bmi;

    // Determine and display BMI category
    const category = getBMICategory(bmi);
    bmiCategory.textContent = `Category: ${category}`;
});
