const arr = [1, 2, 3, 4, 5];

const newNumbers = arr.filter((number) => {
  return number > 2;
});

console.log(newNumbers);

const users = [
  { name: "Matheus", avaliable: true },
  { name: "Pedro", avaliable: false },
  { name: "João", avaliable: false },
  { name: "Marcos", avaliable: true },
];

const availableUsers = users.filter((user) => user.avaliable);
const notAvailableUsers = users.filter((user) => !user.avaliable);

// Template literals
console.log(`availableUsers ${availableUsers}`);
console.log(`notAvailableUsers ${notAvailableUsers}`);
