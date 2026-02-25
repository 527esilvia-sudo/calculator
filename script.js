// user typing
let typedNumberText = ''
// number for calc
let storedNumber = null

let currentOperator = ''

let historyParts = []


function setStatus(message) {
    document.getElementById('statusLine').textContent = message
}

function showSymbol(operator) {
    if (operator === '*') {
        return 'x'
    }
    if (operator === '/') {
        return '÷'
    }
    if (operator === '+') {
        return '+'
    }
    if (operator === '-') {
        return '-'
    }
}

function updateScreen() {
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('statusLine')

    display.textContent = typedNumberText
}



function pressNumber(digit) {
    setStatus('')
    if (typedNumberText === '0') {
        typedNumberText = digit
    }
    else {
        typedNumberText = typedNumberText + digit
    }
    updateScreen()

}

function pressOperator(operator) {

    setStatus("")
    if (typedNumberText === '' && storedNumber === null) {
        setStatus("Type a number first.")
    }

    if (storedNumber === null) {
  storedNumber = Number(typedNumberText)
  currentOperator = operator
  historyParts= [String(storedNumber), currentOperator]
  typedNumberText = ''
  updateScreen()
    }
}
