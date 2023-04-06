// Simple OOP Calculator
class Calculator {
    add(num1, num2) {
        let resultAdd = num1 + num2
        return resultAdd
    }
    subtract(num1, num2) {
        let resultSub = num1 - num2
        return resultSub
    }
    multiply(num1, num2) {
        let resultMult = num1 * num2
        return resultMult
    }
    divide(num1, num2) {
        let resultDiv = num1 / num2
        return resultDiv
    }
}
var calculator = new Calculator()
console.log(calculator.subtract(30,5))
console.log(calculator.add(5,5))
console.log(calculator.multiply(100,5))
console.log(calculator.divide(100,5))

