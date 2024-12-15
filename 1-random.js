'use strict';

/* 1. Реализуйте функцию `random(min, max)`,
возвращающую псевдо-случайное значение от `min` до `max`.
Используйте `Math.random()` и `Math.floor()`.
При вызове `random(max)` нужно считать, что `min = 0`.
*/

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

//console.log(random(2,7));
module.exports = { random };
