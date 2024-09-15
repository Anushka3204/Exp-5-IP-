function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Invalid input: Both inputs must be numbers.");
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Cannot divide by zero.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
        }
    });
}


const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (add, subtract, multiply, divide):");

calculator(num1, num2, operation)
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));
