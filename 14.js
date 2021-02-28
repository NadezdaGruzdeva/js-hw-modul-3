//Задача. Подсчёт свойств 2.0
//Задание
//Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
//
//Тесты
//Объявлена функция countProps(object).
//Вызов countProps({}) возвращает 0.
//Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
//Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
//Функция подсчитывает только собственные свойства объекта.
//Функция использует метод Object.keys() и, возможно, цикл for...of.
function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  const keys = Object.keys(object);

  for (const key of keys) {
    //if (object.hasOwnProperty(key)) {
      propCount += 1;
    //}
  }
  return propCount;
  //keys.length;
  // Пиши код выше этой строки
}
function countProps(object) {
  // Пиши код ниже этой строки
  //let propCount = 0;
  
  const keys = Object.keys(object);

  return keys.length;
  // Пиши код выше этой строки
}
