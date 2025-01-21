"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of the division of two numbers
function returnTheRemainder(num1, num2) {
    return num1 % num2;
}

// Function to check if a number is even
function checkIfEven(num) {
    return num % 2 === 0;
}

// Function to get the fourth element of an array
function getTheFourthElement(array) {
    return array[3];
}

// Function to render the answers to the HTML elements
function render() {
    remainderElement.textContent = returnTheRemainder(5, 4); // Expected: 1
    checkIfEvenElement.textContent = checkIfEven(47); // Expected: false
    lostNumbersElement.textContent = getTheFourthElement(lostNumbers); // Expected: 16
}

submissionBtn.addEventListener("click", function () {
    render();
});
