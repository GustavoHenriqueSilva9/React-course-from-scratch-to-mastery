let a = 5;
let b = 10;

const soma = function (a, b) {
  return a + b;
};
console.debug("soma", soma(a, b));

const somaArrow = (a, b) => {
  return a + b;
};
console.debug("somaArrow", somaArrow(a, b));

const multiArrow = (a, b) => a * b;

console.debug("multArrow", multiArrow(a, b));

const user = {
  name: "theo",
  sayUserName() {
    setTimeout(function () {
      //estou criando outra function dentro desse metodo que esta dentro do objetvo, sendo assim perde o this que referencia ao pai, agora ele referencia a windown
      console.log(this);
      console.log("Username: ", this.name);
    },500);
  },
  sayUserNameArrow(){
    setTimeout(() => {
        console.log(this);
        console.log('Username: ' + this.name);
    },700)
  }
};

user.sayUserName()
user.sayUserNameArrow()