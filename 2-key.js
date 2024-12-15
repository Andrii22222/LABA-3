'use strict';

/*  2. Реализуйте функцию `generateKey(length, characters)`,
возвращающую строку случайных символов из набора `characters` длиной `length`.
Например:
```js
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
```
*/

const generateKey = (length, possible) => {
  let key = '';
  const lenOfCharSet = possible.length;
  for (let i = 0; i < length; i++) {
    const n = Math.floor(Math.random() * lenOfCharSet);
    key += possible[n];
  }
  return key;
};

//console.log(generateKey(30, '0123456789abcdef'));
module.exports = { generateKey };
