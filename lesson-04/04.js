/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
const stroka = 'hello'


function doubleEachCharacter(str) {
    let a = ''
    for (let i = 0; i<str.length; i++) {
        a += str[i] + str[i]
    }
    return a
}

console.log(doubleEachCharacter(stroka));




// const stroka = 'hello'

// function doubleEachCharacter(str) {
//     let a = str.split('')
//     for (let i = 0; i < a.length; i++) {
//         a[i] += a[i]
//     }
//     return a.join('')
// }
// console.log(doubleEachCharacter(stroka));



