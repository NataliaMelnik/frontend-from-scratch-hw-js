/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  
  let arr = str.split(' ');
  let result = [];
  
  for (let i=0; i<arr.length; i++) {
      let word = arr[i].split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
      result.push(word);
            
  }
  
  let res = result.join(' ');
   
  return res;
}

capitalizeWords('hello world from javascript');