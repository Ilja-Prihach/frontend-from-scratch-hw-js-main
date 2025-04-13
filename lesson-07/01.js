/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const string = "hello world from javascript"
// function capitalizeWords(str) {
//   return str.split(' ').map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(' ')
// }
// console.log(capitalizeWords(string));


function capitalizeWords(str) {
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

console.log(capitalizeWords(string));
