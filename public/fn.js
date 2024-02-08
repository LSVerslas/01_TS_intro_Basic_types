"use strict";
function greet(name, weekDay) {
    console.log('Hello ', name, weekDay);
}
// greet(5);
// greet('James');
greet('James', 2);
// parasyti funkcija sum(4, 5) ir grazina ju suma
function sum(x, y) {
    console.log(x + y);
    return x + y;
}
sum(4, 5);
// uzdeti tipus argumentams ir funkcijai
// isbandyti fn su 2 random reikmem
// let num1str = prompt('iveskite reiksme 1');
// let num2str = prompt('iveskite reiksme 2');
// let num1 = Number(num1str);
// let num2 = Number(num2str);
// sum(num1, num2);
// function flow(): void {
//   // isistikinam kad vartotojas nepaspaude cancel
//   if (num1str === null || num2str === null) {
//     return;
//   }
//   sum(+num1str, +num2str);
// }
// flow();
// pasiimti reiksmes ir promt() ir gauti 2 skaiciu suma
// prompt('iveskite reiksme');
// makePrice(50) => '$50.00'
// function makePrice(value: number): string {
//   const rez: string = `$${value.toFixed(2)}`;
//   console.log('rez ===', rez);
//   return rez;
// }
const makePrice = (value, currency = '$') => {
    const rez = `${currency}${value.toFixed(2)}`;
    console.log('rez ===', rez);
    return rez;
};
makePrice(100);
makePrice(100, 'eur ');
