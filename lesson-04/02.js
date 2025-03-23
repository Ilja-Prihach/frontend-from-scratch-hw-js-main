/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/




const abab = [1, 2, 5 ,3, 3 , 4, 4, ]
function findUniqueElements(arr) {
    const b = []

    for (let i = 0; i < arr.length; i++) {
        if (!includesElement(b, arr[i])) {
            b.push(arr[i])
        }
    }
    return b
}


function findUniqueElements(arr) {
    const uniqueElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (!includesElement(uniqueElements, arr[i])) { 
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;
}
console.log(findUniqueElements(abab));



