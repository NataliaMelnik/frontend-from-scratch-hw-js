/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/


function doubleEachCharacter(str) {

	let arrNew=[];
	let arr=str.split('');

	for (let elem of arr) {
		arrNew.push(elem+elem);
	}

	let phrase=arrNew.join('');
	return phrase;
}

