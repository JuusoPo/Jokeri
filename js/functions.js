const list = document.querySelector('#numbers')
const colNumbers = document.querySelector('#cols')
const button = document.querySelector('#button')

let numbers = []
let rowIndex = 0
let rising_num1 = ''

risingNumber = () => {
    rising_num1 = Number(rising_num1 + 1)
    document.querySelector('#cols').innerHTML = rising_num1
}

kenoNumbers = () => {
    while (rowIndex < 7) {
        const randomNumber = Math.floor(Math.random() * 9 + 1)
        numbers.push(randomNumber)
        rowIndex++
    }
    const row = list.insertRow()
    for (let i = 0; i < numbers.length; i++) {
        const col = row.insertCell(i)
        col.innerHTML = numbers[i]
    }
}

document.querySelector('#button'),addEventListener('click', () => {
    kenoNumbers()
    risingNumber()
    numbers.length = 0
    rowIndex = 0
})