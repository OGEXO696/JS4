function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

alert('Keling Misol yechamiz:')
let minNum = +prompt('Minimal sonni kiriting:')
let maxNum = +prompt('Maximal sonni kiriting:')
let s = +prompt('Nechta misol yechmoqchisz?')

for (let i = 0; i < s; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let pr = +prompt('Misolni yeching: ' + num1 + r + num2)
    let answer = num1 + num2 == pr? 'javobingiz togri' : 'Javobingiz notogri'
    alert(num1 + r + num2 + ' =' + (num1+num2) + ' sizning javobingiz ' + pr + '.  ' + answer)
    
}