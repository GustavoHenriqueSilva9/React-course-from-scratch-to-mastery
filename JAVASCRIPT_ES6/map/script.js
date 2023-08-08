const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 22.99, category: "Eletro" },
  { name: "Calça jeans", price: 300, category: "Roupas" },
];

const productsOnSale = products.map((product) => {
  product.category === "Roupas" ? product.onSale = true : null

});

console.log('productsOnSale', products);


