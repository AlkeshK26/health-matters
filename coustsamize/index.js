
// Select DOM elements
const form = document.getElementById('diet-plan-form');
const calculateBmiButton = document.getElementById('calculate-bmi');
const submitFormButton = document.getElementById('submit-form');
const bmiResultDiv = document.getElementById('bmi-result');

// Add event listener for the BMI calculation
calculateBmiButton.addEventListener('click', calculateBmi);

// Add event listener for form submission
submitFormButton.addEventListener('click', submitForm);

function calculateBmi(e) {
    e.preventDefault();  // Prevent form submission
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height && weight) {
        const bmi = weight / ((height / 100) ** 2);
        const bmiResult = `Your BMI is: ${bmi.toFixed(2)}`;
        bmiResultDiv.innerText = bmiResult;
    } else {
        bmiResultDiv.innerText = 'Please enter both height and weight';
    }
}

function submitForm(e) {
    e.preventDefault();  // Prevent default form submission
    const goals = document.getElementById('goals').value;

    // Redirect based on selected goal
    if (goals === 'weight gain') {
        window.location.href = 'weightgain.html';
    } else if (goals === 'weight loss') {
        window.location.href = 'weightlose.html';
    } else if (goals === 'healthy fit') {
        window.location.href = 'remainfit.html';
    } else {
        alert('Please select a valid goal');  // This should never happen due to dropdown
    }
}