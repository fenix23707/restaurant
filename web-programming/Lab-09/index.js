name1 = ""
name2 = ""
currentSymbol = 'X'
currentName = ""
moveNumber = 0
field = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]
window.onload = showStartDisplay

function play() {
    try {
        name1 = document.getElementById('firstName').value;
        validateName(name1)
        name2 = document.getElementById('secondName').value;
        validateName(name2)
        document.getElementById('errorMessage').innerText = ""

        showGameDisplay()
        chooseFirstPlayer()
        writeGameLog()

    } catch (e) {
        document.getElementById('errorMessage').innerText = e.message
    }
}

function clearDisplay() {
    childs = document.body.children
    for (const child of childs) {
        child.style.display = "none"
    }
}

function showStartDisplay() {
    clearDisplay()
    document.getElementById('start-display').style.display = "flex"
}

function showForm() {
    clearDisplay()
    let form = document.getElementById('form')
    form.style.display = "block"
}

function showGameDisplay() {
    clearDisplay()
    document.getElementById('game-display').style.display = "block"
}

function showStatisticsDisplay() {
    clearDisplay()
    document.getElementById('statistics-display').style.display = "block"
}

function validateName(name) {
    console.log(name)
    if (!name) {
        throw new Error("name shouldn't be empty")
    }
    if (name1 === name2) {
        throw new Error("names shouldn't be equals")
    }
}

function move(x, y, button) {
    console.log('x: ' + x + ' y: ' + y)
    field[x][y] = currentSymbol
    moveNumber++
    button.innerText = currentSymbol
    button.disabled = true
    if (checkWin(x, y)) {
        endGame(true)
    } else if (moveNumber == 9) {
        endGame(false)
    } else {
        changeCurrentSymbol()
        changeCurrentName()
        writeGameLog()
    }
}

function checkWin(x, y) {
    //check col
    for (let i = 0; i < 3; i++) {
        if (field[x][i] != currentSymbol) {
            break;
        }
        if (i == 2) {
            return true;
        }
    }
    //check row
    for (let i = 0; i < 3; i++) {
        if (field[i][y] != currentSymbol) {
            break;
        }
        if (i == 2) {
            return true;
        }
    }
    //check diag
    if (x == y) {
        //we're on a diagonal
        for (let i = 0; i < 3; i++) {
            if (field[i][i] != currentSymbol)
                break;
            if (i == 2) {
                return true
            }
        }
    }
    //check anti diag (thanks rampion)
    if (x + y == 2) {
        for (let i = 0; i < 3; i++) {
            if (field[i][2 - i] != currentSymbol)
                break;
            if (i == 2) {
                return true
            }
        }
    }
    return false
}

function endGame(win) {
    let text
    if (win) {
        text = 'победил ' + currentName + ' играя за '+ currentSymbol
    } else {
        text = 'между игроками ' + name1 + ' и ' + name2 + ' ничья'
    }
    alert(text)
    addStatistics(text)
    clearGameField()
    showStartDisplay()

}

function changeCurrentSymbol() {
    currentSymbol = currentSymbol === 'X' ? '0' : 'X'
}

function changeCurrentName() {
    currentName = currentName === name1 ? name2 : name1
}

function chooseFirstPlayer() {
    let choose = Math.random();
    currentName = choose == 1 ? name1 : name2
}

function writeGameLog() {
    log = document.getElementById('game-log')
    log.innerText += 'сейчас ходит игрок с именем: ' + currentName + ' символ: ' + currentSymbol
    log.innerText += '\n'
}

function clearGameField() {
    field = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ]
    currentSymbol = 'X'
    currentName = ""
    moveNumber = 0

    let buttons = document.getElementById('game-field').children
    for (const button of buttons) {
        button.innerText = ""
        button.disabled = false
    }

    document.getElementById('game-log').innerText = ""
}

function addStatistics(text) {
    let staticsText = document.getElementById('statistics-text')
    staticsText.innerText += text
    staticsText.innerText += '\n'
}