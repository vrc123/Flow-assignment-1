// Const
const title = document.querySelector("h1");
const username = document.querySelector("#username");
const heightDiv = document.querySelector("#height");
const weightDiv = document.querySelector("#weight");
const btn = document.querySelector("button");

// Array
let people = [];

// Activate function by click
btn.addEventListener("click", function() {
    calculate(Number(heightDiv.value), Number(weightDiv.value))
});

// Function
function calculate(height,weight) {
    if(username.value == "" || heightDiv.value == "" || weightDiv.value == "") {
        alert("An input field is empty!")
    }
    else {
        // Calculate BMI
        const result = (weight / height ** 2).toFixed(1);

        // Get BMI
        title.innerHTML = "Your BMI: " + result;

        // Object
        const person = {
        username: username.value,
        height: height,
        weight: weight,
        bmi: result
        };

        // Add to Array
        people.push(person);
        console.log(people);

        // Clear inputs
        username.value = "";
        heightDiv.value = "";
        weightDiv.value = "";
    }
}