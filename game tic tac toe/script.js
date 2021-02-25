let board = document.getElementsByClassName('board')[0], // Игровое поле
    player = document.getElementsByClassName('gamer')[0], // Строка хода
    element, innerElement,
    gamer = true, // Показывает, какой игрок сейчас ходит, если true то крестики
    gameTable = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ], // Матрица игры
    nullCount = 9, // Кол-во оставшихся ходов
    winner = null;
let result = document.querySelector('.result');
player.innerText = 'Сейчас ходит X';

// Генерация игрового поля
for (let i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableClick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString());
    element.appendChild(innerElement);
    board.appendChild(element);
}

/**
 * Событие нажатие на ячейку
 */
function tableClick() {
    if (this.innerText == '') { //Проверка содержимого ячейки
        this.innerText = gamer ? 'X' : 'O';
        let y = this.getAttribute('y'),
            x = this.getAttribute('x');
        gameTable[y][x] = gamer;
        nullCount--;
        if ((gameTable[y][0] === gamer && gameTable[y][1] === gamer && gameTable[y][2] === gamer) ||
            (gameTable[0][x] === gamer && gameTable[1][x] === gamer && gameTable[2][x] === gamer) ||
            (gameTable[0][0] === gamer && gameTable[1][1] === gamer && gameTable[2][2] === gamer) ||
            (gameTable[2][0] === gamer && gameTable[1][1] === gamer && gameTable[0][2] === gamer)) {
            winner = gamer;
        }
        gamer = !gamer;
        player.innerText = gamer ? 'Сейчас ходит X' : 'Сейчас ходит O';
        if (nullCount == 0 || winner !== null) {
            if (winner !== null) {
                if (result.innerHTML = 'Победили ' + (winner ? 'X' : 'O') + '. <br> Желаете сыграть ещё?') {}
            } else if (result.innerHTML = 'Ничья.<br> Желаете сыграть ещё?') {}
        }
    } else {
        result.innerHTML = 'Недопустимый ход';
    }
}

document.getElementsByClassName('button')[0].onclick = reset;
/**
 * Функция сброса параметров игры
 */
function reset() {
    location.reload();
}