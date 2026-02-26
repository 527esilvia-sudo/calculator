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

if (typedNumberText !== ''){
       display.textContent = typedNumberText
}

  else {
    display.textContent = '0'
  }
  

    if (historyParts.length === 0) {
        history.textContent = ''
    }
        if (historyParts.length === 1) {
        history.textContent = historyParts[0] 
    }
        if (historyParts.length === 2) {
        history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1])
    }
        if (historyParts.length === 3) {
        history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1]) + historyParts[2]
    }
if(status.textContent === '')status.textContent = 'Ready'
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

    if(typedNumberText !== '' && storedNumber !== null){
        const secondNumber = Number(typedNumberText)
        
}

if (currentOperator === '/' && typedNumberText === '0') {
    setStatus("Ur stupid if u try to divide by 0")
    updateScreen()
    return
}

function clearAll () {
    typedNumberText = ''
    storedNumber = null
    currentOperator = ''
    historyParts = []

    setStatus('Cleared.')
    updateScreen()
}
