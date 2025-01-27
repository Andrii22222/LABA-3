'use strict';
/* 3. Преобразуйте IP адрес (IPv4) в число, содержащее 4 байта адреса,
сдвинутые битовым сдвигом, по такой схеме:
- 1 байт сдвинут 3 раза на 8 бит влево
- 2 байт сдвинут 2 раза на 8 бит влево
- 3 байт сдвинут 1 раз на 8 бит влево
- 4 байт не сдвинут
Например: '10.0.0.1':
- Преобразовываем строку `'10.0.0.1'` в массив `['10', '0', '0', '1']`
- Преобразовываем массив `['10', '0', '0', '1']` в массив `[10, 0, 0, 1]`
- Сдвигаем все элементы по приведенной схеме при помощи цикла:
`[10 << 8 << 8 << 8, 0 << 8 << 8, 0 << 8, 1]` и получаем `[167772160, 0, 0, 1]`
- Суммируем все элементы и получаем `167772161`
- Оптимизируем код через использование `Array.prototype.reduce`
Используйте значение аргумента функции по умолчанию '127.0.0.1'.

Еще примеры:
```
127.0.0.1       ->  2130706433
10.0.0.1        ->   167772161
192.168.1.10    -> -1062731510
165.225.133.150 -> -1511946858
0.0.0.0         ->           0
8.8.8.8         ->  0x08080808
```
*/
const ipToInt = (ip = '127.0.0.1') => {
/*
  const strArray = ip.split('.');
  const intArray = [
    parseInt(strArray[0]) << 24,
    parseInt(strArray[1]) << 16,
    parseInt(strArray[2]) << 8,
    parseInt(strArray[3]),
  ];
  return intArray[0] + intArray[1] + intArray[2] + intArray[3];
*/
  const reducer = (result, arrayItem) => (result << 8) + parseInt(arrayItem);
  return ip.split('.').reduce(reducer, 0);
};

//console.dir(ipToInt('165.225.133.150'));
module.exports = { ipToInt };
