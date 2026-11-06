
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

document.getElementById("operations").onclick = function (e) {
    const op = e.target.dataset.op;

    if (!op) return;

    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const result = document.getElementById("result");

    // Check blank inputs
    if (inputA.trim() === "" || inputB.trim() === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    // Check invalid numbers
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    let answer;

    switch (op) {
        case "+":
            answer = add(a, b);
            break;

        case "-":
            answer = subtract(a, b);
            break;

        case "*":
            answer = multiply(a, b);
            break;

        case "/":
            answer = divide(a, b);
            break;

        default:
            result.textContent = "Invalid operation.";
            return;
    }

    result.textContent = "Result: " + answer;
};
