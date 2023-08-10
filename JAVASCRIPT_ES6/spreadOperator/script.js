const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];

const sum = [...firstNumbers, ...secondNumbers];
console.log(`soma dos dois vetores: ${sum}`);

const n1 = 10;
const n2 = 20;

const sumTotal = [n1, ...sum, n2];
console.log(`sumTotal ${sumTotal}`);

const objUser = { name: "gustavo", age: 21, sex: "maculino" };
const obj1 = { number: 9 };
const obj2 = { letras: "abc" };

const sumTotal02 = {...obj1, ...objUser,...obj2};
console.log('soma dos 3 objetos: ',sumTotal02);
console.log(`Soma de 3 objetos ${sumTotal02}`);

