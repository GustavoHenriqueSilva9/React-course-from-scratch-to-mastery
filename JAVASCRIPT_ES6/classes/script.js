class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola v", 20);
console.log(shirt.name);
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis verde", 250);
console.log(tenis);
console.log(tenis.productWithDiscount(20));

// Herança

class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new productWithAttributes("Chapéu", 29.99, [
  "black",
  "red",
  "white",
]);

console.log(hat.name);
hat.showColors()
