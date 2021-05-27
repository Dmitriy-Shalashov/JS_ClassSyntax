'use strict'
// 1) Переписать функцию - конструктор MyArray на классы. * Переписать методы unshift, push для неограниченного числа аргументов.

// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from(number);
// ■ to(number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
   constructor(from, to) {
      this.from = from;
      this.to = to;
   }
   set from(value) {
      if (typeof value != 'number') {
         throw new TypeError('Input must be a number');
      }
      this._from = value;
   }
   get from() {
      return this._from;
   }

   set to(value) {
      if (typeof value != 'number') {
         throw new TypeError('Input must be a number');
      }
      this._to = value;
   }
   get to() {
      return this._to;
   }

   get range() {
      const resultOfGetRange = [];
      for (let i =this.from; i <= this.to; i++) {
         resultOfGetRange.push(i);
      }
      return resultOfGetRange;
   }
   validate(checkNumber) {
      return (checkNumber <= this.to && checkNumber >= this.from);
   }

}


const RangeValidator1 = new RangeValidator(5, 9);
console.log(RangeValidator1.range);
console.log(RangeValidator1.validate(7));