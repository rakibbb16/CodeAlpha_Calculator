// Get the input field (calculator display)
const display = document.getElementById('display');

// Store user-friendly expression (what's shown to the user)
let inputExpression = '';

// Store actual expression for evaluation (what JS evaluates)
let evalExpression = '';

// Select all calculator buttons
const buttons = document.querySelectorAll('button');

// Loop through each button and add click event
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent; // Get the text on the button

    // If the equals (=) button is clicked
    if (value === '=') {
      try {
        // Evaluate the mathematical expression (e.g., "2*3")
        display.value = eval(evalExpression);

        // Update both expressions to the result
        inputExpression = display.value;
        evalExpression = display.value;
      } catch {
        // If something goes wrong, show error
        display.value = 'Error';
        inputExpression = '';
        evalExpression = '';
      }

    // If the clear (C) button is clicked
    } else if (value === 'C') {
      // Reset everything
      display.value = '';
      inputExpression = '';
      evalExpression = '';

    } else {
      // Handle operator conversions for display vs eval

      if (value === '×') {
        // Show '×' on screen, use '*' for calculation
        inputExpression += '×';
        evalExpression += '*';

      } else if (value === '÷') {
        // Show '÷' on screen, use '/' for calculation
        inputExpression += '÷';
        evalExpression += '/';

      } else {
        // For numbers, dot (.), +, -, just add as is
        inputExpression += value;
        evalExpression += value;
      }

      // Update display with the user-friendly expression
      display.value = inputExpression;
    }
  });
});
