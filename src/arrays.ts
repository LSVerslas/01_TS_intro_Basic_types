// arrays

let colors: string[] = ['red', 'green', 'blue'];

// prideti i spalvu masyva 5
colors.push('5');

let mixed: (string | number)[] = ['blue', 'green'];

mixed.push(5);

const uppperCol: string[] = colors.map((color: string): string => color.toUpperCase());

console.log('uppperCol ===', uppperCol);

const numsArr: number[] = [1, 5, -10, -5, 50, 10];

// atfiltruoti skaicius didesnius uz 3 i kintamaji largerThan3
const filtered: string[] = numsArr
  .filter((sk: number): boolean => sk > 3)
  .map((sk) => sk.toString());
// surasyti vidine anf tipus ir grazinima
console.log('filtered ===', filtered);
