//Задача. Коллекция значений свойства
//Задание
//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
//
//Тесты
//Объявлена функция getAllPropValues(propName).
//Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
//Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
//Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
//Вызов getAllPropValues('category') возвращает [].
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const i = [];
  for (let product of products) {
  
    for (let key of Object.keys(product)) {
      
      if (key === propName) {
      
        i.push(product[key]);
      }
    };
  }
  return i;
  
  
  // Пиши код выше этой строки
}
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const propValues = [];
  for (const product of products) {
  const keys = Object.keys(product);
  if (keys.includes(propName))
    {propValues.push(product[propName])}
  }
  console.log(propValues);
  return propValues;
  
  // Пиши код выше этой строки
}
