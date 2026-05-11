// Function for output display
const updateDisplay = (text) => {
    document.getElementById('output-text').innerHTML = text;
};

// 1. Function to display current date & time
function displayCurrentDateTime() {
    let now = new Date();
    updateDisplay(now.toString());
}

// 2. Function to greet user
function greetUser() {
    let fName = prompt("First Name:");
    let lName = prompt("Last Name:");
    updateDisplay(`Hello, ${fName} ${lName}! ✨`);
}

// 3. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
function handleSum() {
    let n1 = +prompt("Number 1:");
    let n2 = +prompt("Number 2:");
    updateDisplay(`Sum: ${addNumbers(n1, n2)}`);
}

// 4. Calculator Function
function calculator(num1, num2, operator) {
    let res;
    if (operator === '+') res = num1 + num2;
    else if (operator === '-') res = num1 - num2;
    else if (operator === '*') res = num1 * num2;
    else if (operator === '/') res = num1 / num2;
    return res;
}
function handleCalculator() {
    let n1 = +prompt("Number 1:");
    let n2 = +prompt("Number 2:");
    let op = prompt("Operator (+, -, *, /):");
    updateDisplay(`Result: ${calculator(n1, n2, op)}`);
}

// 5. Square Function
function square(num) { updateDisplay(`Square: ${num * num}`); }
function handleSquare() { square(+prompt("Enter number to square:")); }

// 6. Factorial Function
function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}
function handleFactorial() {
    let n = +prompt("Enter number for Factorial:");
    updateDisplay(`Factorial: ${factorial(n)}`);
}

// 7. Counting Function
function handleCounting() {
    let start = +prompt("Start Number:");
    let end = +prompt("End Number:");
    let count = "";
    for (let i = start; i <= end; i++) {
        count += i + (i === end ? "" : ", ");
    }
    updateDisplay(`Counting: ${count}`);
}

// 8. Nested Function for Hypotenuse
function calculateHypotenuse(base, perp) {
    function calculateSquare(val) { return val * val; }
    let hyp = Math.sqrt(calculateSquare(base) + calculateSquare(perp));
    return hyp.toFixed(2);
}
function handleHypotenuse() {
    let b = +prompt("Base:");
    let p = +prompt("Perpendicular:");
    updateDisplay(`Hypotenuse: ${calculateHypotenuse(b, p)}`);
}
