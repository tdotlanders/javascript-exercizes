const orders = [
  {
    id: "A554",
    price: { amount: 12.99, currency: "USD" },
    products: ["T-Shirt"],
  },
  {
    id: "A222",
    price: { amount: 22.43, currency: "EUR" },
    products: ["T-Shirt", "Gravata"],
  },
  {
    id: "A878",
    price: { amount: 58.13, currency: "USD" },
    products: ["T-Shirt", "T-Shirt", "Polo"],
  },
  {
    id: "A192",
    price: { amount: 10.45, currency: "GBP" },
    products: ["Livro"],
  },
  {
    id: "A032",
    price: { amount: 12.99, currency: "EUR" },
    products: ["T-Shirt"],
  },
  {
    id: "A333",
    price: { amount: 99.32, currency: "EUR" },
    products: ["Sweater", "Polo", "Camisa"],
  },
  {
    id: "A876",
    price: { amount: 74.0, currency: "USD" },
    products: ["Sweater", "Livro", "Livro"],
  },
  {
    id: "A234",
    price: { amount: 32.56, currency: "USD" },
    products: ["Polo", "Sweater"],
  },
];

function getOrder(id) {
  return orders.find((order) => order.id === id);
}

// console.log(getOrder("A234"));

////////

const valuePerCurrency = {};
for (const order of orders) {
  const { amount, currency } = order.price;

  const currencySum = valuePerCurrency[currency] ?? 0;

  valuePerCurrency[currency] = currencySum + amount;
}
// console.log(valuePerCurrency);

//////////

const valuePerCurrency = orders.reduce((acc, order)=> {
    const { amount, currency } = order.price;

  const currencySum = acc[currency] ?? 0;

  acc[currency]= currencySum +amount

  return acc;

}{})

console.log(valuePerCurrency)

///////////////

const orderToClone = getOrder('A234')
let count = 1 

while (count<=4)
    {

orders.push(orderToClone)
count += 1
}
console.table(orders)

