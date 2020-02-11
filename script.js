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
  appendNumber(num) {
    this.currentOperand = num
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
const numbButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)

numbButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})