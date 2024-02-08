"use strict";
// arrays
let colors = ['red', 'green', 'blue'];
// prideti i spalvu masyva 5
colors.push('5');
let mixed = ['blue', 'green'];
mixed.push(5);
const uppperCol = colors.map((color) => color.toUpperCase());
console.log('uppperCol ===', uppperCol);
const numsArr = [1, 5, -10, -5, 50, 10];
// atfiltruoti skaicius didesnius uz 3 i kintamaji largerThan3
const filtered = numsArr
    .filter((sk) => sk > 3)
    .map((sk) => sk.toString());
// surasyti vidine anf tipus ir grazinima
console.log('filtered ===', filtered);
