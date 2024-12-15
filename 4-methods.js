'use strict';
/* 4. Реализуйте интроспекцию объекта:
- Проитерируйте все ключи объекта `iface`
- Возьмите ключи функционального типа
- Для каждой функции возьмите количество аргументов
- Сохраните результаты в двумерный массив

Например, из:
```js
{
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
```
нужно получить:
```js
[
  ['m1', 1],
  ['m2', 2],
  ['m3', 3]
]
*/
/*
const js =
{
  m1: (x) => [x],
  m2: (x, y) => [x, y],
  m3: (x, y, z) => [x, y, z],
};
*/
const methods = (iface) => {
  const methodArray = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      methodArray.push([key, iface[key].length]);
    }
  }
  return methodArray;
};

//console.dir(methods(js));
module.exports = { methods };
