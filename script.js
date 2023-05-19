let number_1 = 5
let number_2 = 4

document.getElementById("number_1").textContent = number_1
document.getElementById("number_2").textContent = number_2

function add() {
      let result = number_1 + number_2
      let placeholder = document.getElementById("result")
      placeholder.textContent = "Sum = " + result
}
function subtract() {
      let result = number_1 - number_2
      let placeholder = document.getElementById("result")
      placeholder.textContent = "Subtraction = " + result
}
function divide() {
      let result = number_1 / number_2
      let placeholder = document.getElementById("result")
      placeholder.textContent = "Division = " + result
}
function multiply() {
      let result = number_1 * number_2
      let placeholder = document.getElementById("result")
      placeholder.textContent = "Multiplication = " + result
}