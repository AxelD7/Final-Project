class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText
    this.currentOperandText = currentOperandText
    this.clear()
  }
  
  //this action will delete all the values i see in the previous/current operand and the operation
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  
  delete() {
    
  }
  appendNumber(number) {
    this.currentOperand = number
  }
  
  chooseOperation(operation) {
    
  }
  
  calculate() {
    
  }
  
  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand
  }
}

//created constants for each number/operation/action/ and connected them with each of the buttons on html
const numbButtons = document.querySelectorAll('num')
const operationButtons = document.querySelectorAll('operations')
const equalButton = document.querySelector('equals')
const deleteButton = document.querySelector('delete')
const clearButton = document.querySelector('clear')
const previousOperandText = document.querySelector('previous-operand')
const currentOperandText = document.querySelector('current-operand')

const calculator = new Calculator(previousOperandText, currentOperandText)

numbButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay
  })
})