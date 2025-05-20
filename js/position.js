// position.js
// This script demonstrates how to work with positions in JavaScript.

// Function to calculate the position of an element relative to the document
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#myElement');
    if (element) {
        const position = getElementPosition(element);
        console.log('Element Position:', position);
    } else {
        console.log('Element with ID "myElement" not found.');
    }
});