let fruits = ["maça", "banana", "pera"];

const [f1, f2, f3] = fruits;

console.log(`fruta 01: ${f1}, fruta 02: ${f2} fruta 03: ${f3}`);

const users = { name: "gustavo", age: 21, sexo: "masculino" };

const { name: usersName, age, sexo: userSexo } = users;

console.log(`name ${usersName} age ${age} sexo ${userSexo}`);
